import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const accesibilityRoute = {
  path: conceptPagePath.accesibility,
  exact: true,
  clientComponent: ConceptPage.Accesibility.AsyncAccesibility,
  serverComponent: ConceptPage.Accesibility.Accesibility,
}
