import { Column, Entity, PrimaryColumn } from 'typeorm'
import { Balance } from './balance.interface'

@Entity('Balance')
export class BalanceEntity implements Balance {
  @PrimaryColumn({
    name: 'user_id',
  })
  userId: number

  @Column()
  point: number
}
