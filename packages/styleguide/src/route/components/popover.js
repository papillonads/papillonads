import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const popoverRoute = {
  path: componentsPagePath.popover,
  clientComponent: ComponentsPage.Popover.AsyncPopover,
  serverComponent: ComponentsPage.Popover.Popover,
}
