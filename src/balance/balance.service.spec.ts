import { Test, TestingModule } from '@nestjs/testing'
import { BalanceService } from './balance.service'
import {
  TYPEORM_BALANCE_REPOSITORY_TOKEN,
  TypeOrmBalanceRepository,
} from './balance.repository.impl'

describe('BalanceService', () => {
  let service: BalanceService
  let repository: TypeOrmBalanceRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BalanceService,
        {
          provide: TYPEORM_BALANCE_REPOSITORY_TOKEN,
          useClass: TypeOrmBalanceRepository,
        },
      ],
    }).compile()

    service = module.get<BalanceService>(BalanceService)
    repository = module.get<TypeOrmBalanceRepository>(TypeOrmBalanceRepository)
  })

  it('잔액 조회', async () => {
    jest
      .spyOn(repository, 'charge')
      .mockResolvedValue({  })
      .mockImplementation(requestDto => {
        requestDto.point += 
        return requestDto
      })
    expect(await service.findOne(requestDto)).toMatchObject([
      { courseId: 1, userId: 1, createdAt: new Date('2024-03-27') },
    ])
  })

  it('잔액 충전', async () => {
    jest
      .spyOn(repository, 'charge')
      .mockResolvedValue({  })
      .mockImplementation(requestDto => {
        requestDto.point += 
        return requestDto
      })
    expect(await service.find(requestDto)).toMatchObject([
      { courseId: 1, userId: 1, createdAt: new Date('2024-03-27') },
    ])
  })
})
