import { SupportPage } from '../../pattern/page/SupportPage'
import { supportPagePath } from '../path'

export const spacingRoute = {
  path: supportPagePath.spacing,
  clientComponent: SupportPage.Spacing.AsyncSpacing,
  serverComponent: SupportPage.Spacing.Spacing,
}
