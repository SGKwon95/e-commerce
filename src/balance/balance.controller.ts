import { Controller, Get, Body, Patch, Param } from '@nestjs/common'
import { BalanceService } from './balance.service'
import { ChargeBalanceDto } from './dto/charge-balance.dto'
import { BalanceDto } from './dto/balance.dto'

@Controller('balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get(':userId')
  async findOne(@Param('userId') userId: number): Promise<BalanceDto> {
    return this.balanceService.findOne(userId)
  }

  @Patch('/charge')
  async charge(@Body() chargeBalanceDto: ChargeBalanceDto) {
    return this.balanceService.charge(chargeBalanceDto)
  }
}
