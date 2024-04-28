import { Module } from '@nestjs/common'
import { BalanceService } from './service/balance.service'
import { BalanceController } from '../../api/balance/controller/balance.controller'
import { TYPEORM_BALANCE_REPOSITORY_TOKEN } from './infrastructure/balance.repository.impl'
import { TYPEORM_USER_REPOSITORY_TOKEN } from 'src/domain/user/infrasturcture/user.repository.impl'
import { UserService } from 'src/domain/user/service/user.service'
import { TypeOrmDatabaseModule } from 'src/database/typeorm/typeorm.module'
import { TYPEORM_DATASOURCE_TOKEN } from 'src/database/typeorm/typeorm.providers'
import { DataSource } from 'typeorm'
import { BalanceEntity } from 'src/domain/balance/model/balance.entity'
import { UserEntity } from 'src/domain/user/model/user.entity'

@Module({
  imports: [TypeOrmDatabaseModule],
  controllers: [BalanceController],
  providers: [
    BalanceService,
    UserService,
    {
      provide: TYPEORM_BALANCE_REPOSITORY_TOKEN,
      useFactory: (datasorce: DataSource) =>
        datasorce.getRepository(BalanceEntity),
      inject: [TYPEORM_DATASOURCE_TOKEN],
    },
    {
      provide: TYPEORM_USER_REPOSITORY_TOKEN,
      useFactory: (datasorce: DataSource) =>
        datasorce.getRepository(UserEntity),
      inject: [TYPEORM_DATASOURCE_TOKEN],
    },
  ],
})
export class BalanceModule {}
