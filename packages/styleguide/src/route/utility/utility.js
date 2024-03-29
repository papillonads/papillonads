import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const utilityRoute = {
  path: utilityPagePath.utility,
  clientComponent: UtilityPage.Utility.AsyncUtility,
  serverComponent: UtilityPage.Utility.Utility,
}
