import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const pageHeadersRoute = {
  path: componentsPagePath.pageHeaders,
  exact: true,
  clientComponent: ComponentsPage.PageHeaders.AsyncPageHeaders,
  serverComponent: ComponentsPage.PageHeaders.PageHeaders,
}
