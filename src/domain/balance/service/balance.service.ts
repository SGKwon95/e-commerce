import { Inject, Injectable } from '@nestjs/common'
import { ChargeBalanceDto } from '../../../api/balance/dto/charge-balance.dto'
import { TYPEORM_BALANCE_REPOSITORY_TOKEN } from '../../../infrastructure/balance/balance.repository.impl'
import { BalanceRepository } from '../repository/balance.repository.interface'
import { UserService } from 'src/domain/user/service/user.service'
import { Balance } from '../model/balance.interface'

@Injectable()
export class BalanceService {
  constructor(
    @Inject(TYPEORM_BALANCE_REPOSITORY_TOKEN)
    private readonly balanceRepository: BalanceRepository,
    private readonly userService: UserService,
  ) {}

  async findOne(userId: number): Promise<Balance> {
    const user = await this.userService.findOne(userId)
    return await this.balanceRepository.findOne(user.userId)
  }

  async charge(chargeBalanceDto: ChargeBalanceDto): Promise<Balance> {
    return await this.balanceRepository.charge(chargeBalanceDto)
  }
}
