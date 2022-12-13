import { Injectable, Logger } from '@nestjs/common';
import { EntryAuthor, ReatchService } from '../reatch/reatch.service';
import { WepublishService } from '../wepublish/wepublish.service';
import { Cron, CronExpression } from '@nestjs/schedule';
import {
  AssetInterface,
  ContentBlocks_MatrixField,
  Publications_Publication_Entry,
} from '../../vendor/reatch/api';
import { PrismaService } from '../prisma/prisma.service';
import {
  ArticleInput,
  AuthorInput,
  BlockInput,
} from '../../vendor/wepublish/api/private';
import slugify from 'slugify';
import { convertHtmlToSlate } from './convert-html-to-slate';

const items = new Set();

@Injectable()
export class SyncService {
  private readonly logger = new Logger(SyncService.name);

  constructor(
    readonly reatch: ReatchService,
    readonly wepublish: WepublishService,
    readonly prisma: PrismaService,
  ) {}

  @Cron(CronExpression.EVERY_10_MINUTES)
  async syncArticles() {
    await this.wepublish.authenticate();
    this.logger.log('Syncing articles');

    const reatchArticles = await this.reatch.getArticles();
    for (const entry of reatchArticles.data.entries) {
      if (entry) {
        await this.syncEntry(entry);
      }
    }
  }

  async syncEntry(entry: Publications_Publication_Entry) {
    this.logger.log('Syncing entry id#' + entry.id);
    let mappingEntry = await this.prisma.entry.findUnique({
      where: {
        reatchEntryId: entry.id,
      },
    });

    if (mappingEntry) {
      this.logger.log('Skipping entry id#' + entry.id);
      return;
    }
    const article = await this.wepublish.createArticle({
      title: entry.title,
    });

    mappingEntry = await this.prisma.entry.create({
      data: {
        reatchEntryId: entry.id,
        wepublishArticleId: article.id,
      },
    });

    const authorIds = [];
    for (const author of entry.entryAuthor) {
      authorIds.push(
        (await this.syncArticleAuthor(author as EntryAuthor)).wepublishAuthorId,
      );
    }

    await this.wepublish.updateArticle({
      id: mappingEntry.wepublishArticleId,
      input: {
        ...(await this.mapEntryToArticleInput(entry)),
        authorIDs: authorIds,
      },
    });

    await this.wepublish.publishArticle({
      id: mappingEntry.wepublishArticleId,
      updatedAt: entry.postDate,
      publishAt: entry.postDate,
      publishedAt: entry.postDate,
    });
  }

  async syncArticleAuthor(entryAuthor: EntryAuthor) {
    this.logger.log('Syncing author id#' + entryAuthor.id);
    this.logger.log({ entryAuthor });
    let authorMapping = await this.prisma.author.findUnique({
      where: {
        reatchUserId: entryAuthor.id,
      },
    });
    const name = entryAuthor.firstname + ' ' + entryAuthor.lastname;
    const input = {
      name,
      slug: slugify(name),
      bio: await convertHtmlToSlate(entryAuthor.shortBio),
      jobTitle: entryAuthor.function,
    } as AuthorInput;
    if (!authorMapping) {
      this.logger.log('Creating author id#' + entryAuthor.id);
      const author = await this.wepublish.createAuthor({ input });
      authorMapping = await this.prisma.author.create({
        data: {
          wepublishAuthorId: author.id,
          reatchUserId: entryAuthor.id,
        },
      });
    } else {
      await this.wepublish.updateAuthor({
        id: authorMapping.wepublishAuthorId,
        input,
      });
    }
    return authorMapping;
  }

  async syncImage(asset: AssetInterface) {
    let imageMapping = await this.prisma.image.findUnique({
      where: {
        reatchAssetId: asset.id,
      },
    });
    if (!imageMapping) {
      // upload image

      // const image = await this.wepublish.uploadImage({
      //   input: {
      //     title: asset.title,
      //     file: new File([await result.blob()], asset.filename),
      //   },
      // });
      const image = { id: 'string' };
      imageMapping = await this.prisma.image.create({
        data: {
          wepublishImageId: image.id,
          reatchAssetId: asset.id,
        },
      });
    }
    return imageMapping.wepublishImageId;
  }

  async createImageBlockFromAsset(asset: AssetInterface): Promise<BlockInput> {
    const imageID = await this.syncImage(asset);
    return {
      image: {
        imageID,
        caption: asset.title,
      },
    };
  }

  async mapEntryToArticleInput(
    entry: Publications_Publication_Entry,
  ): Promise<ArticleInput> {
    const blocks: BlockInput[] = [];

    blocks.push({
      title: {
        title: entry.title,
        lead: entry.entryLead,
      },
    });

    for (const image of entry.entryImage) {
      // blocks.push(await this.createImageBlockFromAsset(image));
    }

    for (const block of entry.contentBlocks) {
      const blockBlocks = await this.mapBlock(block);
      blocks.push(...blockBlocks.filter((e) => e));
    }
    return {
      title: entry.title + 'test',
      tags: [],
      seoTitle: entry.metaTitle,
      slug: entry.slug,
      properties: [],
      socialMediaAuthorIDs: [],
      hideAuthor: false,
      blocks,
      shared: true,
      authorIDs: [],
      breaking: false,
      lead: entry.entryLead,
      canonicalUrl: entry.url,
    } as ArticleInput;
  }

  async mapBlock(block: ContentBlocks_MatrixField): Promise<Array<BlockInput>> {
    switch (block.__typename) {
      case 'contentBlocks_text_BlockType':
      case 'contentBlocks_accordionBlock_BlockType':
        if (!block.text) {
          return [];
        }
        return [
          {
            richText: {
              richText: await convertHtmlToSlate(block.text),
            },
          },
        ];
      case 'contentBlocks_imageText_BlockType':
        const blocks = [];
        for (const image of block.image) {
          // blocks.push(await this.createImageBlockFromAsset(image));
        }
        if (block.text) {
          blocks.push({
            richText: {
              richText: await convertHtmlToSlate(block.text),
            },
          });
        }
        return blocks;
      case 'contentBlocks_textBlockWithLabel_BlockType':
        return [
          {
            richText: {
              richText: await convertHtmlToSlate(
                `<h3>${block.heading}</h3>${block.textContent}`,
              ),
            },
          },
        ];
      case 'contentBlocks_peopleBlockWithLabel_BlockType':
        return [];
      case 'contentBlocks_standardDescriptionBlock_BlockType':
        return [];
      //   const blocks = [];
      //   for (const entry of block.entry) {
      //     const descriptionEntry = entry as { text: string };
      //     if (descriptionEntry.text) {
      //       blocks.push({
      //         richText: {
      //           richText: await convertHtmlToSlate(descriptionEntry.text),
      //         },
      //       });
      //     }
      //   }
      //   return blocks;
      case 'contentBlocks_sources_BlockType':
        let html = '';
        html += `<h3>${block.heading}</h3>`;
        html += `<ul>`;

        for (const source of block.sources) {
          // source;
          html += `<li>[${source.nr}] ${source.text}</li>`;
        }
        html += `</ul>`;
        return [
          {
            richText: {
              richText: await convertHtmlToSlate(html),
            },
          },
        ];

      default:
        items.add(block.__typename);
        return [];
    }
  }
}
