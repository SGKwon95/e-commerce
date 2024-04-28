import { Module } from '@nestjs/common'
import { typeOrmDatabaseProvider } from './typeorm.providers'

@Module({
  providers: [...typeOrmDatabaseProvider],
  exports: [...typeOrmDatabaseProvider],
})
export class TypeOrmDatabaseModule {}
