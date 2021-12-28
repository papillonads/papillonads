import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const tooltipsRoute = {
  path: componentsPagePath.tooltips,
  clientComponent: ComponentsPage.Tooltips.AsyncTooltips,
  serverComponent: ComponentsPage.Tooltips.Tooltips,
}
