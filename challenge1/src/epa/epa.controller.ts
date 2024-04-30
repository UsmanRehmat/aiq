import { Controller, Get, Query, Post } from '@nestjs/common';
import { EpaService } from './epa.service';
import { FindAllPlantsDto } from './dto/findAllPlants.request.dto';

@Controller('epa')
export class EpaController {
  constructor(private readonly epaService: EpaService) {}
  @Get()
  findAll(@Query() params: FindAllPlantsDto) {
    return this.epaService.findAll(params);
  }

  @Post()
  loadData() {
    return this.epaService.loadData();
  }
}
