import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const flashBannerRoute = {
  path: componentsPagePath.flashBanner,
  exact: true,
  clientComponent: ComponentsPage.FlashBanner.AsyncFlashBanner,
  serverComponent: ComponentsPage.FlashBanner.FlashBanner,
}
