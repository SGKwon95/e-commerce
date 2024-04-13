import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('Balance')
export class Balance {
  @PrimaryColumn({
    name: 'user_id',
  })
  userId: number

  @Column()
  point: number
}
