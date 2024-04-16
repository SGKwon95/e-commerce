import { Module } from '@nestjs/common'
import { ProductService } from '../../domain/product/service/product.service'
import { ProductController } from '../../api/product/controller/product.controller'

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
