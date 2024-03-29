import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const navigationRoute = {
  path: componentsPagePath.navigation,
  clientComponent: ComponentsPage.Navigation.AsyncNavigation,
  serverComponent: ComponentsPage.Navigation.Navigation,
}
