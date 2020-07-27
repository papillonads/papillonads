import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const boxRoute = {
  path: componentsPagePath.box,
  exact: true,
  clientComponent: ComponentsPage.Box.AsyncBox,
  serverComponent: ComponentsPage.Box.Box,
}
