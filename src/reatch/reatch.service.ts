import { Inject, Injectable } from '@nestjs/common';
import { ApolloClient, gql } from '@apollo/client/core';
import { Query } from '../../vendor/reatch/api';

export type EntryAuthor = {
  id: string;
  firstname: string;
  lastname: string;
  shortBio: string;
  email: string;
  customNameLink: string;
  customLink: string;
  function: string;
};

@Injectable()
export class ReatchService {
  constructor(
    @Inject(ReatchService.ApolloClient) private client: ApolloClient<any>,
  ) {}

  async getArticles() {
    return await this.client.query<Query>({
      query: gql`
        query MyQuery {
          entries(
            typeId: 2
            orderBy: "postDate desc"
            postDate: ">= 2022-05-21T10:00:00+02:00"
          ) {
            id
            title
            level
            sectionHandle
            sectionId
            postDate
            slug
            ... on publications_publication_Entry {
              id
              entryAuthor {
                id
                firstname
                lastname
                shortBio
                email
                customNameLink
                customLink
                function
              }
              slug
              metaTitle
              uri
              url
              title
              entryImage {
                id
                title
                url
                filename
              }
              entryLead
              contentBlocks {
                __typename
                ... on contentBlocks_text_BlockType {
                  id
                  text
                }
                ... on contentBlocks_imageText_BlockType {
                  id
                  text
                  image {
                    id
                    title
                    url
                    filename
                  }
                }
                ... on contentBlocks_textBlockWithLabel_BlockType {
                  id
                  heading
                  textContent
                  uri
                }
                ... on contentBlocks_accordionBlock_BlockType {
                  id
                  heading
                  text
                }
                #                ... on contentBlocks_standardDescriptionBlock_BlockType {
                #                  id
                #                  entry {
                #                    id
                #                    ... on standardDescriptions_default_Entry {
                #                      text
                #                    }
                #                  }
                #                }
                ... on contentBlocks_sources_BlockType {
                  id
                  heading
                  sources {
                    __typename
                    ... on sources_BlockType {
                      id
                      nr
                      text
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });
  }

  static ApolloClient = Symbol();
}
