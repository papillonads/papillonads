import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const bootstrapRoute = {
  path: conceptPagePath.bootstrap,
  exact: true,
  clientComponent: ConceptPage.Bootstrap.AsyncBootstrap,
  serverComponent: ConceptPage.Bootstrap.Bootstrap,
}
