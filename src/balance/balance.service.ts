import { Inject, Injectable } from '@nestjs/common'
import { ChargeBalanceDto } from './dto/charge-balance.dto'
import { BalanceDto } from './dto/balance.dto'
import { TYPEORM_BALANCE_REPOSITORY_TOKEN } from './balance.repository.impl'
import { BalanceRepository } from './balance.repository.interface'
import { UserService } from 'src/user/user.service'

@Injectable()
export class BalanceService {
  constructor(
    @Inject(TYPEORM_BALANCE_REPOSITORY_TOKEN)
    private readonly balanceRepository: BalanceRepository,
    private readonly userService: UserService,
  ) {}

  async findOne(userId: number): Promise<BalanceDto> {
    const user = await this.userService.findOne(userId)
    return await this.balanceRepository.findOne(user.userId)
  }

  async charge(chargeBalanceDto: ChargeBalanceDto): Promise<BalanceDto> {
    return await this.balanceRepository.charge(chargeBalanceDto)
  }
}
