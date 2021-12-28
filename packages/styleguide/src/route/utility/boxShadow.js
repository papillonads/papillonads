import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const boxShadowRoute = {
  path: utilityPagePath.boxShadow,
  clientComponent: UtilityPage.BoxShadow.AsyncBoxShadow,
  serverComponent: UtilityPage.BoxShadow.BoxShadow,
}
