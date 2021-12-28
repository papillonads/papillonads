import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const marketingMarginRoute = {
  path: utilityPagePath.marketingMargin,
  clientComponent: UtilityPage.MarketingMargin.AsyncMarketingMargin,
  serverComponent: UtilityPage.MarketingMargin.MarketingMargin,
}
