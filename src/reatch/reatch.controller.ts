import { Controller, Get } from '@nestjs/common';
import { ReatchService } from './reatch.service';

@Controller('reatch')
export class ReatchController {
  constructor(private reatch: ReatchService) {}

  @Get('/articles')
  getArticles() {
    return this.reatch.getArticles();
  }
}
