import { injectable } from 'inversify'
import axios from 'axios'
import { HomeRepository } from '../domain/home-repository'
import { ZonaId } from '../domain/zona-id'

@injectable()
export class AxiosHomeRepository implements HomeRepository {
  baseURL: string = 'http://190.85.242.78:8080'
  errorRes: any

  async getAllZonas(): Promise<any> {
    try {
      const res: any = await axios.get(
        `${this.baseURL}/services/simdcp/api/zonas-sitecs`
      )
      return res.data
    } catch (error: any) {
      return this.createError(error)
    }
  }

  async getZona(zonaId: ZonaId): Promise<any> {
    try {
      const res: any = await axios.get(
        `..${this.baseURL}/services/simdcp/api/zonas-sitecs/${zonaId}`
      )
      return res.data
    } catch (error: any) {
      return this.createError(error)
    }
  }

  createError(error: any): void {
    this.errorRes = {
      description: error.response.statusText,
      title: error.response.data.detail,
      status: error.response.status,
    }
    return this.errorRes
  }
}
