import { Module } from '@nestjs/common'
import { BalanceService } from './balance.service'
import { BalanceController } from './balance.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Balance } from './entities/balance.entity'
import {
  TYPEORM_BALANCE_REPOSITORY_TOKEN,
  TypeOrmBalanceRepository,
} from './balance.repository.impl'
import { User } from 'src/user/entities/user.entity'
import {
  TYPEORM_USER_REPOSITORY_TOKEN,
  TypeOrmUserRepository,
} from 'src/user/user.repository.impl'
import { UserService } from 'src/user/user.service'

@Module({
  imports: [TypeOrmModule.forFeature([Balance, User])],
  controllers: [BalanceController],
  providers: [
    BalanceService,
    UserService,
    {
      provide: TYPEORM_BALANCE_REPOSITORY_TOKEN,
      useClass: TypeOrmBalanceRepository,
    },
    {
      provide: TYPEORM_USER_REPOSITORY_TOKEN,
      useClass: TypeOrmUserRepository,
    },
  ],
})
export class BalanceModule {}
