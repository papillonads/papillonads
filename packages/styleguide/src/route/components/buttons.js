import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const buttonsRoute = {
  path: componentsPagePath.buttons,
  clientComponent: ComponentsPage.Buttons.AsyncButtons,
  serverComponent: ComponentsPage.Buttons.Buttons,
}
