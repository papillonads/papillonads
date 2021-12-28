import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const alertsRoute = {
  path: componentsPagePath.alerts,
  clientComponent: ComponentsPage.Alerts.AsyncAlerts,
  serverComponent: ComponentsPage.Alerts.Alerts,
}
