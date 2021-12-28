import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const selectMenuRoute = {
  path: componentsPagePath.selectMenu,
  clientComponent: ComponentsPage.SelectMenu.AsyncSelectMenu,
  serverComponent: ComponentsPage.SelectMenu.SelectMenu,
}
