import { Injectable } from '@nestjs/common'
import { ChargeBalanceDto } from '../../../api/balance/dto/charge-balance.dto'
import { BalanceEntity } from '../model/balance.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BalanceRepository } from '../repository/balance.repository.interface'

export const TYPEORM_BALANCE_REPOSITORY_TOKEN = 'BALANCE'

@Injectable()
export class TypeOrmBalanceRepository implements BalanceRepository {
  constructor(
    @InjectRepository(BalanceEntity)
    private readonly balanceRepository: Repository<BalanceEntity>,
  ) {}

  async findOne(userId: number): Promise<BalanceEntity> {
    return await this.balanceRepository.findOne({ where: [{ userId }] })
  }

  async charge(chargeBalanceDto: ChargeBalanceDto): Promise<BalanceEntity> {
    this.balanceRepository.createQueryBuilder('')
    // await this.balanceRepository
    //   .createQueryBuilder()
    //   .setLock('pessimistic_write')
    //   .increment(
    //     { userId: chargeBalanceDto.userId },
    //     'point',
    //     chargeBalanceDto.point,
    //   )
    // this.balanceRepository.createQueryBuilder('')
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
