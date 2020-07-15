import { ObjectsPage } from '../../pattern/page/ObjectsPage'
import { objectsPagePath } from '../path'

export const tableObjectRoute = {
  path: objectsPagePath.tableObject,
  exact: true,
  clientComponent: ObjectsPage.TableObject.AsyncTableObject,
  serverComponent: ObjectsPage.TableObject.TableObject,
}
