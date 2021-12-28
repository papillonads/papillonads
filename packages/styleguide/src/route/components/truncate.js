import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const truncateRoute = {
  path: componentsPagePath.truncate,
  clientComponent: ComponentsPage.Truncate.AsyncTruncate,
  serverComponent: ComponentsPage.Truncate.Truncate,
}
