import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const marketingPaddingRoute = {
  path: utilityPagePath.marketingPadding,
  clientComponent: UtilityPage.MarketingPadding.AsyncMarketingPadding,
  serverComponent: UtilityPage.MarketingPadding.MarketingPadding,
}
