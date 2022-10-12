import { Module } from '@nestjs/common';
import { SyncService } from './sync.service';
import { WepublishModule } from '../wepublish/wepublish.module';
import { ReatchModule } from '../reatch/reatch.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [SyncService],
  imports: [WepublishModule, ReatchModule, PrismaModule],
})
export class SyncModule {}
