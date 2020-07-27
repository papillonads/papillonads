import { AsyncComponentsPage as AsyncComponents, ComponentsPage as Components } from './ComponentsPage'
import { AsyncAlertsPage as AsyncAlerts, AlertsPage as Alerts } from './AlertsPage'
import { AsyncAvatarsPage as AsyncAvatars, AvatarsPage as Avatars } from './AvatarsPage'
import { AsyncBlankslatePage as AsyncBlankslate, BlankslatePage as Blankslate } from './BlankslatePage'

export const ComponentsPage = {
  Components: { AsyncComponents, Components },
  Alerts: { AsyncAlerts, Alerts },
  Avatars: { AsyncAvatars, Avatars },
  Blankslate: { AsyncBlankslate, Blankslate },
}
