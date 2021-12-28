import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const blankslateRoute = {
  path: componentsPagePath.blankslate,
  clientComponent: ComponentsPage.Blankslate.AsyncBlankslate,
  serverComponent: ComponentsPage.Blankslate.Blankslate,
}
