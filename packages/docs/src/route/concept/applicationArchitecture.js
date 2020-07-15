import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const applicationArchitectureRoute = {
  path: conceptPagePath.applicationArchitecture,
  exact: true,
  clientComponent: ConceptPage.ApplicationArchitecture.AsyncApplicationArchitecture,
  serverComponent: ConceptPage.ApplicationArchitecture.ApplicationArchitecture,
}
