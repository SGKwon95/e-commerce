import { IsNumber, IsString } from 'class-validator'

export class ProductInfoDto {
  @IsNumber()
  productId: number

  @IsString()
  productName: string

  @IsNumber()
  price: number

  @IsNumber()
  stock: number
}
