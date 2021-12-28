import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const progressRoute = {
  path: componentsPagePath.progress,
  clientComponent: ComponentsPage.Progress.AsyncProgress,
  serverComponent: ComponentsPage.Progress.Progress,
}
