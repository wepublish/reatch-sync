import { Module } from '@nestjs/common';
import { ReatchService } from './reatch.service';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
import { fetch } from 'cross-fetch';

@Module({
  providers: [
    ReatchService,
    {
      provide: ReatchService.ApolloClient,
      useFactory() {
        const reatchUri =
          'https://reatch.ch/index.php?p=admin/actions/graphql/';
        return new ApolloClient({
          uri: reatchUri,
          cache: new InMemoryCache(),
          link: new HttpLink({
            uri: reatchUri,
            fetch,
          }),
        });
      },
    },
  ],
  exports: [ReatchService],
})
export class ReatchModule {}
