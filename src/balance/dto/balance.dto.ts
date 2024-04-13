import { ApiProperty } from '@nestjs/swagger'
import { IsNumber } from 'class-validator'

export class BalanceDto {
  @ApiProperty()
  @IsNumber()
  point: number
}
