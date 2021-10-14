import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { SYMBOLS } from '../src/shared/infrastructure/container/Types'
import { ZonaSitec } from '../src/Home/domain/zona-sitec'
import { container } from '~/src/shared/infrastructure/container/Container'
import { GetZonasHandler } from '~/src/Home/application/getAllZonas/GetZonasHandler'
import { GetZonaHandler } from '~/src/Home/application/getZona/GetZonaHandler'

@Module({
  name: 'HomeStore',
  stateFactory: true,
  namespaced: true,
})
export default class HomeStore extends VuexModule {
  _zonasSitec: ZonaSitec[]
  _zonaSitec: ZonaSitec

  @Mutation
  getZonasSitec() {
    this._zonasSitec = container
      .get<GetZonasHandler>(SYMBOLS.HOME_GET_ALL_ZONAS)
      .ask()
  }

  @Mutation
  getZonaSitec() {
    this._zonaSitec = container.get<GetZonaHandler>(SYMBOLS.HOME_GET_ZONA).ask()
  }

  //   @Action
  //   loger(login: Login) {
  //     const accessCommand = new AccessCommand(login)
  //     container.get<AccessHandler>(SYMBOLS.LOGIN_ACCESS).dispatch(accessCommand)
  //     this.getZonasSitec()
  //   }

  get zonasSitec(): any {
    return this._zonasSitec
  }
}
