import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BalanceModule } from './balance/balance.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'e-commerce',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      dropSchema: true,
    }),
    BalanceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
