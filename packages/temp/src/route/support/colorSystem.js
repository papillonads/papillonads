import { SupportPage } from '../../pattern/page/SupportPage'
import { supportPagePath } from '../path'

export const colorSystemRoute = {
  path: supportPagePath.colorSystem,
  exact: true,
  clientComponent: SupportPage.ColorSystem.AsyncColorSystem,
  serverComponent: SupportPage.ColorSystem.ColorSystem,
}
