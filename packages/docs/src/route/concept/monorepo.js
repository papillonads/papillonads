import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const monorepoRoute = {
  path: conceptPagePath.monorepo,
  exact: true,
  clientComponent: ConceptPage.Monorepo.AsyncMonorepo,
  serverComponent: ConceptPage.Monorepo.Monorepo,
}
