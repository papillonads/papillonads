import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const blankslateRoute = {
  path: componentsPagePath.blankslate,
  exact: true,
  clientComponent: ComponentsPage.Blankslate.AsyncBlankslate,
  serverComponent: ComponentsPage.Blankslate.Blankslate,
}
