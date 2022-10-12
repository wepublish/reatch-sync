import { Module } from '@nestjs/common';
import { WepublishService } from './wepublish.service';
import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from '@apollo/client/core';
import { fetch } from 'cross-fetch';
import { WepublishConfiguration } from './wepublish-configuration';

@Module({
  providers: [
    WepublishService,
    {
      provide: WepublishConfiguration,
      useValue: {
        username: process.env.WEPUBLISH_USERNAME,
        password: process.env.WEPUBLISH_PASSWORD,
      } as WepublishConfiguration,
    },
    {
      provide: WepublishService.ApolloClient,
      inject: [WepublishConfiguration],
      useFactory(config: WepublishConfiguration) {
        const authMiddleware = new ApolloLink((operation, forward) => {
          const token = config?.token;
          operation.setContext({
            headers: {
              authorization: token ? `Bearer ${token}` : '',
            },
          });
          return forward(operation);
        });
        const wepublishUri = process.env.WEPUBLISH_URI;
        return new ApolloClient({
          uri: wepublishUri,
          cache: new InMemoryCache(),
          link: concat(
            authMiddleware,
            new HttpLink({
              uri: wepublishUri,
              fetch,
            }),
          ),
        });
      },
    },
  ],
  exports: [WepublishService],
})
export class WepublishModule {}
