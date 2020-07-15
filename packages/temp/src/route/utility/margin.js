import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const marginRoute = {
  path: utilityPagePath.margin,
  exact: true,
  clientComponent: UtilityPage.Margin.AsyncMargin,
  serverComponent: UtilityPage.Margin.Margin,
}
