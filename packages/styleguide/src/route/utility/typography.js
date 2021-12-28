import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const typographyRoute = {
  path: utilityPagePath.typography,
  clientComponent: UtilityPage.Typography.AsyncTypography,
  serverComponent: UtilityPage.Typography.Typography,
}
