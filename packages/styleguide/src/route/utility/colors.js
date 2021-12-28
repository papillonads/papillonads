import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const colorsRoute = {
  path: utilityPagePath.colors,
  clientComponent: UtilityPage.Colors.AsyncColors,
  serverComponent: UtilityPage.Colors.Colors,
}
