import { Module } from '@nestjs/common'
import { UserEntity } from 'src/domain/user/model/user.entity'
import { TYPEORM_USER_REPOSITORY_TOKEN } from 'src/domain/user/infrasturcture/user.repository.impl'
import { UserService } from './service/user.service'
import { TypeOrmDatabaseModule } from 'src/database/typeorm/typeorm.module'
import { DataSource } from 'typeorm'
import { TYPEORM_DATASOURCE_TOKEN } from 'src/database/typeorm/typeorm.providers'

@Module({
  imports: [TypeOrmDatabaseModule],
  providers: [
    UserService,
    {
      provide: TYPEORM_USER_REPOSITORY_TOKEN,
      useFactory: (datasorce: DataSource) =>
        datasorce.getRepository(UserEntity),
      inject: [TYPEORM_DATASOURCE_TOKEN],
    },
  ],
})
export class UserModule {}
