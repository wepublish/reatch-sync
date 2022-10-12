import { Module } from '@nestjs/common';
import { WepublishModule } from './wepublish/wepublish.module';
import { ReatchModule } from './reatch/reatch.module';
import { SyncModule } from './sync/sync.module';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    WepublishModule,
    ReatchModule,
    SyncModule,
    ScheduleModule.forRoot(),
  ],
})
export class AppModule {}
