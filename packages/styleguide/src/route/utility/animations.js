import { UtilityPage } from '../../pattern/page/UtilityPage'
import { utilityPagePath } from '../path'

export const animationsRoute = {
  path: utilityPagePath.animations,
  clientComponent: UtilityPage.Animations.AsyncAnimations,
  serverComponent: UtilityPage.Animations.Animations,
}
