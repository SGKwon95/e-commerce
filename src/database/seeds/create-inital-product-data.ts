import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { DataSource } from 'typeorm'
import { Product } from '../../product/entities/product.entity'

export default class ProductSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const productRepository = dataSource.getRepository(Product)
    await productRepository.insert([
      {
        productId: 1,
        productName: '핫딜 상품',
        price: 2000,
      },
    ])
  }
}
