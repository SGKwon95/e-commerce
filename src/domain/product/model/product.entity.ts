import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('Product')
export class ProductEntity {
  @PrimaryColumn({
    name: 'product_id',
  })
  productId: number

  @Column({
    name: 'product_name',
  })
  productName: string

  @Column()
  price: number
}
