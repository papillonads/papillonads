import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const boxOverlayRoute = {
  path: componentsPagePath.boxOverlay,
  clientComponent: ComponentsPage.BoxOverlay.AsyncBoxOverlay,
  serverComponent: ComponentsPage.BoxOverlay.BoxOverlay,
}
