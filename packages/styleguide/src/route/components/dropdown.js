import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const dropdownRoute = {
  path: componentsPagePath.dropdown,
  clientComponent: ComponentsPage.Dropdown.AsyncDropdown,
  serverComponent: ComponentsPage.Dropdown.Dropdown,
}
