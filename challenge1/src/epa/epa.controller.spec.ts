import { Test, TestingModule } from '@nestjs/testing';
import { EpaController } from './epa.controller';

describe('EpaController', () => {
  let controller: EpaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EpaController],
    }).compile();

    controller = module.get<EpaController>(EpaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
