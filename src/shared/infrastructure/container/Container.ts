import 'reflect-metadata'
import { Container } from 'inversify'
import getDecorators from 'inversify-inject-decorators'
import { SYMBOLS } from '~/src/shared/infrastructure/container/Types'
import { HomeRepository } from '~/src/Home/domain/home-repository'
import { AxiosHomeRepository } from '~/src/Home/infrastructure/AxiosHomeRepository'
import { GetZonasHandler } from '~/src/Home/application/getAllZonas/GetZonasHandler'
import { GetZonaHandler } from '~/src/Home/application/getZona/GetZonaHandler'

export const container = new Container()

container
  .bind<HomeRepository>(SYMBOLS.HOME_REPOSITORY)
  .to(AxiosHomeRepository)
  .inSingletonScope()

container
  .bind<GetZonasHandler>(SYMBOLS.HOME_GET_ALL_ZONAS)
  .to(GetZonasHandler)
  .inSingletonScope()

container
  .bind<GetZonaHandler>(SYMBOLS.HOME_GET_ZONA)
  .to(GetZonaHandler)
  .inSingletonScope()

export const { lazyInject } = getDecorators(container)
