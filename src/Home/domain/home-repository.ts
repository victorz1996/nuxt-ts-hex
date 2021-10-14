import { ZonaId } from './zona-id'

export interface HomeRepository {
  getAllZonas(): Promise<any>
  getZona(zonaId: ZonaId): Promise<any>
}
