import { Injectable } from '@nestjs/common'
import { ChargeBalanceDto } from './dto/charge-balance.dto'
import { Balance } from './entities/balance.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BalanceRepository } from './balance.repository.interface'

export const TYPEORM_BALANCE_REPOSITORY_TOKEN = 'BALANCE'

@Injectable()
export class TypeOrmBalanceRepository implements BalanceRepository {
  constructor(
    @InjectRepository(Balance)
    private readonly balanceRepository: Repository<Balance>,
  ) {}

  async findOne(userId: number): Promise<Balance> {
    return await this.balanceRepository.findOne({ where: [{ userId }] })
  }

  async charge(chargeBalanceDto: ChargeBalanceDto): Promise<Balance> {
    await this.balanceRepository.increment(
      { userId: chargeBalanceDto.userId },
      'point',
      chargeBalanceDto.point,
    )
    return await this.balanceRepository.findOne({
      where: [{ userId: chargeBalanceDto.userId }],
    })
  }
}
