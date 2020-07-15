import { ObjectsPage } from '../../pattern/page/ObjectsPage'
import { objectsPagePath } from '../path'

export const layoutRoute = {
  path: objectsPagePath.layout,
  exact: true,
  clientComponent: ObjectsPage.Layout.AsyncLayout,
  serverComponent: ObjectsPage.Layout.Layout,
}
