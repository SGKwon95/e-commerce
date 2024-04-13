import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { UserRepository } from './user.repository.interface'
import { TYPEORM_USER_REPOSITORY_TOKEN } from './user.repository.impl'
import { UserDto } from './dto/user.dto'

@Injectable()
export class UserService {
  constructor(
    @Inject(TYPEORM_USER_REPOSITORY_TOKEN)
    private readonly userRepository: UserRepository,
  ) {}

  async findOne(userId: number): Promise<UserDto> {
    const user = await this.userRepository.findOne(userId)
    if (!user) {
      throw new NotFoundException('해당 유저를 찾을 수 없습니다.')
    }
    const userDto = new UserDto()
    userDto.userId = user.userId
    return userDto
  }
}
