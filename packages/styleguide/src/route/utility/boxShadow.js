import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const boxShadowRoute = {
  path: utilityPagePath.boxShadow,
  exact: true,
  clientComponent: UtilityPage.BoxShadow.AsyncBoxShadow,
  serverComponent: UtilityPage.BoxShadow.BoxShadow,
}
