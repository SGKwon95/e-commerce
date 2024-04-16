import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from 'src/domain/user/model/user.entity'
import {
  TYPEORM_USER_REPOSITORY_TOKEN,
  TypeOrmUserRepository,
} from 'src/infrastructure/user/user.repository.impl'
import { UserService } from '../../domain/user/service/user.service'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    UserService,
    {
      provide: TYPEORM_USER_REPOSITORY_TOKEN,
      useClass: TypeOrmUserRepository,
    },
  ],
})
export class BalanceModule {}
