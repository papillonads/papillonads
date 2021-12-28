import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const flexboxRoute = {
  path: utilityPagePath.flexbox,
  clientComponent: UtilityPage.Flexbox.AsyncFlexbox,
  serverComponent: UtilityPage.Flexbox.Flexbox,
}
