import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BalanceModule } from './infrastructure/balance/balance.module'
import { ProductModule } from './infrastructure/product/product.module'
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
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
