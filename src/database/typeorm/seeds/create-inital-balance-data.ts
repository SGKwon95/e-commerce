import { Seeder } from 'typeorm-extension'
import { DataSource } from 'typeorm'
import { BalanceEntity } from 'src/domain/balance/model/balance.entity'

export default class BalanceSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const balanceRepository = dataSource.getRepository(BalanceEntity)
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
