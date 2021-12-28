import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const marketingButtonsRoute = {
  path: componentsPagePath.marketingButtons,
  clientComponent: ComponentsPage.MarketingButtons.AsyncMarketingButtons,
  serverComponent: ComponentsPage.MarketingButtons.MarketingButtons,
}
