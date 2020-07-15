import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const breadcrumbRoute = {
  path: componentsPagePath.breadcrumb,
  exact: true,
  clientComponent: ComponentsPage.Breadcrumb.AsyncBreadcrumb,
  serverComponent: ComponentsPage.Breadcrumb.Breadcrumb,
}
