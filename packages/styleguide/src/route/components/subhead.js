import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const subheadRoute = {
  path: componentsPagePath.subhead,
  clientComponent: ComponentsPage.Subhead.AsyncSubhead,
  serverComponent: ComponentsPage.Subhead.Subhead,
}
