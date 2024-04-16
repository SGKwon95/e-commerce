import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { UserRepository } from '../../balance/repository/user.repository.interface'
import { TYPEORM_USER_REPOSITORY_TOKEN } from '../../../infrastructure/user/user.repository.impl'
import { User } from '../model/user.interface'

@Injectable()
export class UserService {
  constructor(
    @Inject(TYPEORM_USER_REPOSITORY_TOKEN)
    private readonly userRepository: UserRepository,
  ) {}

  async findOne(userId: number): Promise<User> {
    const user = await this.userRepository.findOne(userId)
    if (!user) {
      throw new NotFoundException('해당 유저를 찾을 수 없습니다.')
    }
    return user
  }
}
