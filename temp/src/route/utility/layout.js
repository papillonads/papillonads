import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const layoutRoute = {
  path: utilityPagePath.layout,
  exact: true,
  clientComponent: UtilityPage.Layout.AsyncLayout,
  serverComponent: UtilityPage.Layout.Layout,
}
