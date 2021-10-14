import { inject, injectable } from 'inversify'
import { HomeRepository } from '../../domain/home-repository'
import QueryHandler from '~/src/shared/domain/use-case/query/QueryHandler'
import { SYMBOLS } from '~/src/shared/infrastructure/container/Types'

@injectable()
export class GetZonaHandler implements QueryHandler {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject(SYMBOLS.HOME_REPOSITORY)
    private readonly homeRepository: HomeRepository
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ask(query?: any): any {
    return this.homeRepository.getZona(query)
  }
}
