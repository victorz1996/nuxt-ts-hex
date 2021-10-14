import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import HomeStore from '@/store/HomeStore'

// eslint-disable-next-line import/no-mutable-exports
let homeStore: HomeStore

function initialiseStores(store: Store<any>): void {
  homeStore = getModule(HomeStore, store)
}

export { initialiseStores, homeStore }
