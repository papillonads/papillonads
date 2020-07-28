import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const dropdownRoute = {
  path: componentsPagePath.dropdown,
  exact: true,
  clientComponent: ComponentsPage.Dropdown.AsyncDropdown,
  serverComponent: ComponentsPage.Dropdown.Dropdown,
}
