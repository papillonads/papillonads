import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const routingRoute = {
  path: conceptPagePath.routing,
  exact: true,
  clientComponent: ConceptPage.Routing.AsyncRouting,
  serverComponent: ConceptPage.Routing.Routing,
}
