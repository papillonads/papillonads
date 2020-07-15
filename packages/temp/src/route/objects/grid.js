import { ObjectsPage } from '../../pattern/page/ObjectsPage'
import { objectsPagePath } from '../path'

export const gridRoute = {
  path: objectsPagePath.grid,
  exact: true,
  clientComponent: ObjectsPage.Grid.AsyncGrid,
  serverComponent: ObjectsPage.Grid.Grid,
}
