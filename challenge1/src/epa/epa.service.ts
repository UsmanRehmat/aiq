import { Injectable } from '@nestjs/common';
import { Plant } from './entitiy/plant.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { State } from './entitiy/state.entity';
import { FindAllPlantsDto } from './dto/findAllPlants.request.dto';
import { PaginationHelper } from 'src/helper/pagination.helper';
import { FindAllPlantsResponseDto } from './dto/findAllPlants.response.dto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const XLSX = require('xlsx');

@Injectable()
export class EpaService {
  constructor(
    @InjectRepository(Plant)
    private readonly plantRepository: Repository<Plant>,
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>,
    private readonly paginationHelper: PaginationHelper,
  ) {}
  async findAll(params: FindAllPlantsDto): Promise<Partial<Plant[]>> {
    const where = {};
    if (params.stateCode) {
      where['PSTATABB'] = params.stateCode;
    }
    const offset = this.paginationHelper.getOffset(
      params.page,
      params.pageSize,
    );
    const plants = await this.plantRepository.find({
      where,
      select: {
        LAT: true,
        LON: true,
        PNAME: true,
        SEQPLT: true,
        PLNGENAN: true,
        PSTATABB: {
          PSTATABB: true,
          STNGENAN: true,
        },
      },
      relations: {
        PSTATABB: true,
      },
      skip: offset,
      take: params.pageSize,
      order: { PLNGENAN: 'desc' },
    });

    const plantsResponse = plants.map((plant): FindAllPlantsResponseDto => {
      return {
        ...plant,
        PLNGENANPercentage:
          ((plant.PLNGENAN / plant?.PSTATABB?.STNGENAN) * 100).toFixed(2) + '%',
      };
    });

    return plantsResponse;
  }

  async loadData(): Promise<boolean> {
    const workbook = XLSX.readFile(process.cwd() + '/data/eGRID2021_data.xlsx');
    // states data
    const statesData: any[] = XLSX.utils.sheet_to_json(
      workbook.Sheets['ST21'],
      {
        range: 1,
      },
    );
    const states = [];
    for (let i = 0; i < statesData.length; i++) {
      const state = this.stateRepository.create({
        ...statesData[i],
        STHGAN: 0,
        STHGRTA: 0,
        STHGRA: 0,
        STHGCRT: 0,
        STNBHG: 0,
      });
      states.push(state);
    }
    await this.stateRepository.save(states, { chunk: 100 });
    // plants data
    const plantsData: any[] = XLSX.utils.sheet_to_json(
      workbook.Sheets['PLNT21'],
      {
        range: 1,
      },
    );
    const plants = [];
    for (let i = 0; i < plantsData.length; i++) {
      const plant = this.plantRepository.create(plantsData[i]);
      plants.push(plant);
    }
    await this.plantRepository.save(plants, { chunk: 100 });

    return true;
  }
}
