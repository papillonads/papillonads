import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const marketingTypographyRoute = {
  path: utilityPagePath.marketingTypography,
  exact: true,
  clientComponent: UtilityPage.MarketingTypography.AsyncMarketingTypography,
  serverComponent: UtilityPage.MarketingTypography.MarketingTypography,
}
