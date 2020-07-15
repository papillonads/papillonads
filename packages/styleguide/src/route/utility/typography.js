import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const typographyRoute = {
  path: utilityPagePath.typography,
  exact: true,
  clientComponent: UtilityPage.Typography.AsyncTypography,
  serverComponent: UtilityPage.Typography.Typography,
}
