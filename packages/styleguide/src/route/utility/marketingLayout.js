import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const marketingLayoutRoute = {
  path: utilityPagePath.marketingLayout,
  clientComponent: UtilityPage.MarketingLayout.AsyncMarketingLayout,
  serverComponent: UtilityPage.MarketingLayout.MarketingLayout,
}
