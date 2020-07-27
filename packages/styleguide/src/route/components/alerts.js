import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const alertsRoute = {
  path: componentsPagePath.alerts,
  exact: true,
  clientComponent: ComponentsPage.Alerts.AsyncAlerts,
  serverComponent: ComponentsPage.Alerts.Alerts,
}
