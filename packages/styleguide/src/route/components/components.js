import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const componentsRoute = {
  path: componentsPagePath.components,
  exact: true,
  clientComponent: ComponentsPage.Components.AsyncComponents,
  serverComponent: ComponentsPage.Components.Components,
}
