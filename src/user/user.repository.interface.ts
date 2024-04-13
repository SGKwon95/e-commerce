import { UserDto } from './dto/user.dto'

export interface UserRepository {
  findOne(userId: number): Promise<UserDto>
}
