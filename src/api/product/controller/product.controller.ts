import { Controller, Get, Body, Patch, Param } from '@nestjs/common'
import { ProductService } from '../../../domain/product/service/product.service'

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  async getProductInfo(@Param('productId') productId: number) {
    return await this.productService.getProductInfo(productId)
  }
}
