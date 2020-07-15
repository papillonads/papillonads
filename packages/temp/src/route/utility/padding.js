import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const paddingRoute = {
  path: utilityPagePath.padding,
  exact: true,
  clientComponent: UtilityPage.Padding.AsyncPadding,
  serverComponent: UtilityPage.Padding.Padding,
}
