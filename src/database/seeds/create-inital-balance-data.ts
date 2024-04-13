import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { DataSource } from 'typeorm'
import { Balance } from '../../balance/entities/balance.entity'

export default class BalanceSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const balanceRepository = dataSource.getRepository(Balance)
    await balanceRepository.insert([
      {
        userId: 1,
        point: 1000,
      },
      {
        userId: 2,
        point: 500,
      },
    ])
  }
}
