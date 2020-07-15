import { SupportPage } from '../../pattern/page/SupportPage'
import { supportPagePath } from '../path'

export const spacingRoute = {
  path: supportPagePath.spacing,
  exact: true,
  clientComponent: SupportPage.Spacing.AsyncSpacing,
  serverComponent: SupportPage.Spacing.Spacing,
}
