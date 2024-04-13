import { ApiProperty } from '@nestjs/swagger'
import { IsNumber } from 'class-validator'

export class ChargeBalanceDto {
  @ApiProperty()
  @IsNumber()
  point: number

  @ApiProperty()
  @IsNumber()
  userId: number
}
