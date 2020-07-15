import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const runtimeRoute = {
  path: conceptPagePath.runtime,
  exact: true,
  clientComponent: ConceptPage.Runtime.AsyncRuntime,
  serverComponent: ConceptPage.Runtime.Runtime,
}
