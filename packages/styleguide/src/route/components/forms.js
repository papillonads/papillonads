import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const formsRoute = {
  path: componentsPagePath.forms,
  exact: true,
  clientComponent: ComponentsPage.Forms.AsyncForms,
  serverComponent: ComponentsPage.Forms.Forms,
}
