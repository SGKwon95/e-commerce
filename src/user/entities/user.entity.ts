import { Entity, PrimaryColumn } from 'typeorm'

@Entity('User')
export class User {
  @PrimaryColumn({
    name: 'user_id',
  })
  userId: number
}
