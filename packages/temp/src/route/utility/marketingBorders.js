import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const marketingBordersRoute = {
  path: utilityPagePath.marketingBorders,
  exact: true,
  clientComponent: UtilityPage.MarketingBorders.AsyncMarketingBorders,
  serverComponent: UtilityPage.MarketingBorders.MarketingBorders,
}
