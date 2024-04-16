import { Seeder } from 'typeorm-extension'
import { DataSource } from 'typeorm'
import { UserEntity } from '../../domain/user/model/user.entity'

export default class UserSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const userRepository = dataSource.getRepository(UserEntity)
    await userRepository.insert([
      {
        userId: 1,
      },
    ])
  }
}
