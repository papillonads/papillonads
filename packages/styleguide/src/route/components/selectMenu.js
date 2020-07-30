import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const selectMenuRoute = {
  path: componentsPagePath.selectMenu,
  exact: true,
  clientComponent: ComponentsPage.SelectMenu.AsyncSelectMenu,
  serverComponent: ComponentsPage.SelectMenu.SelectMenu,
}
