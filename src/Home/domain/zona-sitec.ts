import { ZonaId } from './zona-id'

export interface ZonaSitec {
  createdBy?: string
  createdDate?: string
  lastModifiedBy?: string
  lastModifiedDate?: string
  id?: ZonaId
  descripcion?: string
  estado?: string
  tieneStore?: string
  usuariosAsignados?: string
  aprobacion?: string
  aprobacion1?: string
}
