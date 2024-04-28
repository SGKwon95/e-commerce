import { Product } from '../model/product.interface'

export interface ProductRepository {
  getProductInfo(productId: number): Promise<Product>
}
