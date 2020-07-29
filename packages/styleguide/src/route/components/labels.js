import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const labelsRoute = {
  path: componentsPagePath.labels,
  exact: true,
  clientComponent: ComponentsPage.Labels.AsyncLabels,
  serverComponent: ComponentsPage.Labels.Labels,
}
