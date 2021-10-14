import { inject, injectable } from 'inversify'
import { HomeRepository } from '../../domain/home-repository'
import Query from '../../../shared/domain/use-case/query/Query'
import { SYMBOLS } from '~/src/shared/infrastructure/container/Types'
import QueryHandler from '~/src/shared/domain/use-case/query/QueryHandler'

@injectable()
export class GetZonasHandler implements QueryHandler {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject(SYMBOLS.HOME_REPOSITORY)
    private readonly homeRepository: HomeRepository
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ask(query?: Query): any {
    console.log(
      this.homeRepository.getAllZonas().then((r) => {
        console.log(r)
      })
    )
    return this.homeRepository.getAllZonas()
  }
}
