import { Test, TestingModule } from '@nestjs/testing';
import { Prisma~Service } from './prisma~.service';

describe('Prisma~Service', () => {
  let service: Prisma~Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Prisma~Service],
    }).compile();

    service = module.get<Prisma~Service>(Prisma~Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
