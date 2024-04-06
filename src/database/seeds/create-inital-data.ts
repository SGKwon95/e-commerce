import { Seeder } from 'typeorm-extension'
import { DataSource } from 'typeorm'
import { Balance } from 'src/balance/entities/balance.entity'

export default class BalanceSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const courseRepository = dataSource.getRepository(Balance)
    await courseRepository.insert([
      {
        userId: 1,
        balance: 1000,
      },
    ])
  }
}
