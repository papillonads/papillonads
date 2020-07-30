import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const tooltipsRoute = {
  path: componentsPagePath.tooltips,
  exact: true,
  clientComponent: ComponentsPage.Tooltips.AsyncTooltips,
  serverComponent: ComponentsPage.Tooltips.Tooltips,
}
