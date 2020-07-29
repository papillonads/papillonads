import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const marketingButtonsRoute = {
  path: componentsPagePath.marketingButtons,
  exact: true,
  clientComponent: ComponentsPage.MarketingButtons.AsyncMarketingButtons,
  serverComponent: ComponentsPage.MarketingButtons.MarketingButtons,
}
