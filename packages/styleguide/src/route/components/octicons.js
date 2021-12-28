import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const octiconsRoute = {
  path: componentsPagePath.octicons,
  clientComponent: ComponentsPage.Octicons.AsyncOcticons,
  serverComponent: ComponentsPage.Octicons.Octicons,
}
