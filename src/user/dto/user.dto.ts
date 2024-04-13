import { ApiProperty } from '@nestjs/swagger'
import { IsNumber } from 'class-validator'

export class UserDto {
  @ApiProperty()
  @IsNumber()
  userId: number
}
