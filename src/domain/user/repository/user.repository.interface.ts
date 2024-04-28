import { User } from 'src/domain/user/model/user.interface'

export interface UserRepository {
  findOne(userId: number): Promise<User>
}
