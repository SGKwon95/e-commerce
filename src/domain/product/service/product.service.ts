import { Injectable } from '@nestjs/common'

@Injectable()
export class ProductService {
  getProductInfo(id: number) {
    return `This action returns a #${id} product`
  }
}
