import { ChargeBalanceDto } from '../../../api/balance/dto/charge-balance.dto'
import { Balance } from '../model/balance.interface'

export interface BalanceRepository {
  findOne(userId: number): Promise<Balance>
  charge(chargeBalanceDto: ChargeBalanceDto): Promise<Balance>
}
