import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class FindAllPlantsDto {
  @Type(() => String)
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  stateCode: string;

  @Type(() => Number)
  @IsOptional()
  @IsInt({ message: 'page-format-incorrect' })
  @Min(1, { message: 'page-min-value' })
  @ApiPropertyOptional()
  page: number;

  @Type(() => Number)
  @IsOptional()
  @IsInt({ message: 'page-size-format-incorrect' })
  @Min(0, { message: 'page-size-min-value' })
  @ApiPropertyOptional()
  pageSize: number;

  @IsOptional()
  @ApiPropertyOptional()
  search?: string;
}
