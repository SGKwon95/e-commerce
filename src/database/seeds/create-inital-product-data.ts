import { Seeder } from 'typeorm-extension'
import { DataSource } from 'typeorm'
import { ProductEntity } from '../../domain/product/model/product.entity'

export default class ProductSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const productRepository = dataSource.getRepository(ProductEntity)
    await productRepository.insert([
      {
        productId: 1,
        productName: '핫딜 상품',
        price: 2000,
      },
    ])
  }
}
