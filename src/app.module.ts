import { Module } from '@nestjs/common'
import { BalanceModule } from './domain/balance/balance.module'
import { ProductModule } from './domain/product/product.module'
@Module({
  imports: [BalanceModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
