import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const accessibilityRoute = {
  path: conceptPagePath.accessibility,
  exact: true,
  clientComponent: ConceptPage.Accessibility.AsyncAccessibility,
  serverComponent: ConceptPage.Accessibility.Accessibility,
}
