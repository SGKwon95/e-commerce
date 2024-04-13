import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/user/entities/user.entity'
import {
  TYPEORM_USER_REPOSITORY_TOKEN,
  TypeOrmUserRepository,
} from 'src/user/user.repository.impl'
import { UserService } from './user.service'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserService,
    {
      provide: TYPEORM_USER_REPOSITORY_TOKEN,
      useClass: TypeOrmUserRepository,
    },
  ],
})
export class BalanceModule {}
