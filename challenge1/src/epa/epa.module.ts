import { Module } from '@nestjs/common';
import { EpaController } from './epa.controller';
import { EpaService } from './epa.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from './entitiy/plant.entity';
import { State } from './entitiy/state.entity';
import { PaginationHelper } from 'src/helper/pagination.helper';

@Module({
  imports: [TypeOrmModule.forFeature([Plant, State])],
  controllers: [EpaController],
  providers: [EpaService, PaginationHelper],
})
export class EpaModule {}
