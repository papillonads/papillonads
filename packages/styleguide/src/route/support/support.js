import { SupportPage } from '../../pattern/page/SupportPage'
import { supportPagePath } from '../path'

export const supportRoute = {
  path: supportPagePath.support,
  clientComponent: SupportPage.Support.AsyncSupport,
  serverComponent: SupportPage.Support.Support,
}
