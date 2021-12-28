import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const detailsRoute = {
  path: utilityPagePath.details,
  clientComponent: UtilityPage.Details.AsyncDetails,
  serverComponent: UtilityPage.Details.Details,
}
