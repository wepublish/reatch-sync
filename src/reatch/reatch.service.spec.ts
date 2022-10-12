import { Test, TestingModule } from '@nestjs/testing';
import { ReatchService } from './reatch.service';

describe('ReatchService', () => {
  let service: ReatchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReatchService],
    }).compile();

    service = module.get<ReatchService>(ReatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
