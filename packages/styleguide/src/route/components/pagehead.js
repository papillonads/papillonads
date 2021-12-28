import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const pageheadRoute = {
  path: componentsPagePath.pagehead,
  clientComponent: ComponentsPage.Pagehead.AsyncPagehead,
  serverComponent: ComponentsPage.Pagehead.Pagehead,
}
