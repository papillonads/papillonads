import { SupportPage } from '../../pattern/page/SupportPage'
import { supportPagePath } from '../path'

export const typographyRoute = {
  path: supportPagePath.typography,
  exact: true,
  clientComponent: SupportPage.Typography.AsyncTypography,
  serverComponent: SupportPage.Typography.Typography,
}
