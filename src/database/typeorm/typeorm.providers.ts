import { DataSource } from 'typeorm'

const TYPEORM_DATASOURCE_TOKEN = 'TYPEORM_DATA_SOURCE'
const typeOrmDatabaseProvider = [
  {
    provide: TYPEORM_DATASOURCE_TOKEN,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'e-commerce',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
        dropSchema: false,
      })

      return dataSource.initialize()
    },
  },
]
export { typeOrmDatabaseProvider, TYPEORM_DATASOURCE_TOKEN }
