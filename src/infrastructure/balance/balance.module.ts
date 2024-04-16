import { Module } from '@nestjs/common'
import { BalanceService } from '../../domain/balance/service/balance.service'
import { BalanceController } from '../../api/balance/controller/balance.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BalanceEntity } from '../../domain/balance/model/balance.entity'
import {
  TYPEORM_BALANCE_REPOSITORY_TOKEN,
  TypeOrmBalanceRepository,
} from './balance.repository.impl'
import { UserEntity } from 'src/domain/user/model/user.entity'
import {
  TYPEORM_USER_REPOSITORY_TOKEN,
  TypeOrmUserRepository,
} from 'src/infrastructure/user/user.repository.impl'
import { UserService } from 'src/domain/user/service/user.service'

@Module({
  imports: [TypeOrmModule.forFeature([BalanceEntity, UserEntity])],
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
