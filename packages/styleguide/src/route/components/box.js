import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const boxRoute = {
  path: componentsPagePath.box,
  clientComponent: ComponentsPage.Box.AsyncBox,
  serverComponent: ComponentsPage.Box.Box,
}
