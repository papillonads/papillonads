import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const bordersRoute = {
  path: utilityPagePath.borders,
  exact: true,
  clientComponent: UtilityPage.Borders.AsyncBorders,
  serverComponent: UtilityPage.Borders.Borders,
}
