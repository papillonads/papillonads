import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const flashBannerRoute = {
  path: componentsPagePath.flashBanner,
  clientComponent: ComponentsPage.FlashBanner.AsyncFlashBanner,
  serverComponent: ComponentsPage.FlashBanner.FlashBanner,
}
