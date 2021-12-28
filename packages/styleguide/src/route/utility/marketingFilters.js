import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const marketingFiltersRoute = {
  path: utilityPagePath.marketingFilters,
  clientComponent: UtilityPage.MarketingFilters.AsyncMarketingFilters,
  serverComponent: UtilityPage.MarketingFilters.MarketingFilters,
}
