import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const micrositeRoute = {
  path: conceptPagePath.microsite,
  exact: true,
  clientComponent: ConceptPage.Microsite.AsyncMicrosite,
  serverComponent: ConceptPage.Microsite.Microsite,
}
