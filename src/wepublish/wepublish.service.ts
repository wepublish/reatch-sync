import { ApolloClient, ApolloError, gql } from '@apollo/client/core';
import { Inject, Injectable } from '@nestjs/common';
import {
  CreateArticle,
  Query,
  Article,
  ArticleQueryVariables,
  CreateArticleMutationVariables,
  Mutation,
  CreateSessionMutationVariables,
  CreateSession,
  UpdateArticleMutationVariables,
  UpdateArticle,
  CreateAuthorMutationVariables,
  CreateAuthor,
  UpdateAuthorMutationVariables,
  UpdateAuthor,
  PublishArticle,
  PublishArticleMutationVariables,
  UploadImageMutationVariables,
  UploadImage,
} from '../../vendor/wepublish/api/private';
import { WepublishConfiguration } from './wepublish-configuration';

@Injectable()
export class WepublishService {
  constructor(
    private config: WepublishConfiguration,
    @Inject(WepublishService.ApolloClient) private client: ApolloClient<any>,
  ) {}

  async getArticle(id: string) {
    return await this.client.query<Query, ArticleQueryVariables>({
      query: Article,
      variables: {
        id,
      },
    });
  }

  async authenticate() {
    const response = await this.client.mutate<
      Mutation,
      CreateSessionMutationVariables
    >({
      mutation: CreateSession,
      variables: {
        email: this.config.username,
        password: this.config.password,
      },
    });
    this.config.token = response.data.createSession.token;
  }

  async createArticle(input: { title: string }) {
    const response = await this.client.mutate<
      Mutation,
      CreateArticleMutationVariables
    >({
      mutation: CreateArticle,
      variables: {
        input: {
          authorIDs: [],
          blocks: [],
          breaking: false,
          hideAuthor: false,
          properties: [],
          shared: true,
          socialMediaAuthorIDs: [],
          tags: [],
          title: input.title,
        },
      },
    });
    return response.data.createArticle;
  }

  async updateArticle(variables: UpdateArticleMutationVariables) {
    try {
      return await this.client.mutate<Mutation, UpdateArticleMutationVariables>(
        {
          mutation: UpdateArticle,
          variables,
        },
      );
    } catch (e) {
      console.error(((e as ApolloError).networkError as any).result);
      throw e;
    }
  }

  async createAuthor(variables: CreateAuthorMutationVariables) {
    const author = await this.client.mutate<
      Mutation,
      CreateAuthorMutationVariables
    >({
      mutation: CreateAuthor,
      variables,
    });
    return author.data.createAuthor;
  }

  async updateAuthor(variables: UpdateAuthorMutationVariables) {
    const response = await this.client.mutate<
      Mutation,
      UpdateAuthorMutationVariables
    >({
      mutation: UpdateAuthor,
      variables,
    });
    return response.data.updateAuthor;
  }

  async publishArticle(variables: PublishArticleMutationVariables) {
    const response = await this.client.mutate<
      Mutation,
      PublishArticleMutationVariables
    >({
      mutation: PublishArticle,
      variables,
    });
    return response.data.publishArticle;
  }

  async uploadImage(variables: UploadImageMutationVariables) {
    const author = await this.client.mutate<
      Mutation,
      UploadImageMutationVariables
    >({
      mutation: UploadImage,
      variables,
    });
    return author.data.uploadImage;
  }

  static ApolloClient = Symbol();
}
