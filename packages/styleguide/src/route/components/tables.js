import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const tablesRoute = {
  path: componentsPagePath.tables,
  clientComponent: ComponentsPage.Tables.AsyncTables,
  serverComponent: ComponentsPage.Tables.Tables,
}
