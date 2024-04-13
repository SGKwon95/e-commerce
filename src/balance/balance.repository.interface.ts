import { BalanceDto } from './dto/balance.dto'
import { ChargeBalanceDto } from './dto/charge-balance.dto'

export interface BalanceRepository {
  findOne(userId: number): Promise<BalanceDto>
  charge(chargeBalanceDto: ChargeBalanceDto): Promise<BalanceDto>
}
