import { SupportPage } from '../../pattern/page/SupportPage'
import { supportPagePath } from '../path'

export const marketingVariablesRoute = {
  path: supportPagePath.marketingVariables,
  clientComponent: SupportPage.MarketingVariables.AsyncMarketingVariables,
  serverComponent: SupportPage.MarketingVariables.MarketingVariables,
}
