import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const pageSectionsRoute = {
  path: componentsPagePath.pageSections,
  clientComponent: ComponentsPage.PageSections.AsyncPageSections,
  serverComponent: ComponentsPage.PageSections.PageSections,
}
