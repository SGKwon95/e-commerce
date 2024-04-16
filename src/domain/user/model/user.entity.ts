import { Entity, PrimaryColumn } from 'typeorm'
import { User } from './user.interface'

@Entity('User')
export class UserEntity implements User {
  @PrimaryColumn({
    name: 'user_id',
  })
  userId: number
}
