import { ObjectsPage } from '../../pattern/page/ObjectsPage'
import { objectsPagePath } from '../path'

export const gridRoute = {
  path: objectsPagePath.grid,
  clientComponent: ObjectsPage.Grid.AsyncGrid,
  serverComponent: ObjectsPage.Grid.Grid,
}
