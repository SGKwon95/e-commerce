import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { UserEntity } from '../model/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { UserRepository } from '../repository/user.repository.interface'

export const TYPEORM_USER_REPOSITORY_TOKEN = 'USER'

@Injectable()
export class TypeOrmUserRepository implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findOne(userId: number): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: [{ userId }] })
  }
}
