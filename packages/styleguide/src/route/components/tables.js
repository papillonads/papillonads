import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const tablesRoute = {
  path: componentsPagePath.tables,
  exact: true,
  clientComponent: ComponentsPage.Tables.AsyncTables,
  serverComponent: ComponentsPage.Tables.Tables,
}
