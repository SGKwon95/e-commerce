import { Module } from '@nestjs/common'
import { ProductService } from './service/product.service'
import { ProductController } from '../../api/product/controller/product.controller'
import { ProductEntity } from 'src/domain/product/model/product.entity'
import { TYPEORM_PRODUCT_REPOSITORY_TOKEN } from './infrastructure/product.repository.impl'
import { TypeOrmDatabaseModule } from 'src/database/typeorm/typeorm.module'
import { DataSource } from 'typeorm'
import { TYPEORM_DATASOURCE_TOKEN } from 'src/database/typeorm/typeorm.providers'

@Module({
  imports: [TypeOrmDatabaseModule],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      provide: TYPEORM_PRODUCT_REPOSITORY_TOKEN,
      useFactory: (datasorce: DataSource) =>
        datasorce.getRepository(ProductEntity),
      inject: [TYPEORM_DATASOURCE_TOKEN],
    },
  ],
})
export class ProductModule {}
