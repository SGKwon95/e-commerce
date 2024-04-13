import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { UserRepository } from './user.repository.interface'

export const TYPEORM_USER_REPOSITORY_TOKEN = 'USER'

@Injectable()
export class TypeOrmUserRepository implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne(userId: number): Promise<User> {
    return await this.userRepository.findOne({ where: [{ userId }] })
  }
}
