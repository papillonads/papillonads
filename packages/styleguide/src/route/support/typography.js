import { SupportPage } from '../../pattern/page/SupportPage'
import { supportPagePath } from '../path'

export const typographyRoute = {
  path: supportPagePath.typography,
  clientComponent: SupportPage.Typography.AsyncTypography,
  serverComponent: SupportPage.Typography.Typography,
}
