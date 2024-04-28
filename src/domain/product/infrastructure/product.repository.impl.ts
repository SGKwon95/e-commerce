import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ProductRepository } from 'src/domain/product/repository/product.repository.interface'
import { ProductEntity } from 'src/domain/product/model/product.entity'
import { Product } from 'src/domain/product/model/product.interface'

export const TYPEORM_PRODUCT_REPOSITORY_TOKEN = 'PRODUCT'

@Injectable()
export class TypeOrmProductRepository implements ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async getProductInfo(productId: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      relations: { stock: true },
      where: { productId },
    })
    return { ...product, stockAmount: product.stock.amount }
  }
}
