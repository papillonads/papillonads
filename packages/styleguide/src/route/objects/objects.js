import { ObjectsPage } from '../../pattern/page/ObjectsPage'
import { objectsPagePath } from '../path'

export const objectsRoute = {
  path: objectsPagePath.objects,
  clientComponent: ObjectsPage.Objects.AsyncObjects,
  serverComponent: ObjectsPage.Objects.Objects,
}
