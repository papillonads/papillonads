import { AsyncComponentsPage as AsyncComponents, ComponentsPage as Components } from './ComponentsPage'
import { AsyncAlertsPage as AsyncAlerts, AlertsPage as Alerts } from './AlertsPage'
import { AsyncAvatarsPage as AsyncAvatars, AvatarsPage as Avatars } from './AvatarsPage'
import { AsyncBlankslatePage as AsyncBlankslate, BlankslatePage as Blankslate } from './BlankslatePage'
import { AsyncBoxPage as AsyncBox, BoxPage as Box } from './BoxPage'
import { AsyncBoxOverlayPage as AsyncBoxOverlay, BoxOverlayPage as BoxOverlay } from './BoxOverlayPage'
import { AsyncBoxedGroupsPage as AsyncBoxedGroups, BoxedGroupsPage as BoxedGroups } from './BoxedGroupsPage'
import { AsyncBranchNamePage as AsyncBranchName, BranchNamePage as BranchName } from './BranchNamePage'

export const ComponentsPage = {
  Components: { AsyncComponents, Components },
  Alerts: { AsyncAlerts, Alerts },
  Avatars: { AsyncAvatars, Avatars },
  Blankslate: { AsyncBlankslate, Blankslate },
  Box: { AsyncBox, Box },
  BoxOverlay: { AsyncBoxOverlay, BoxOverlay },
  BoxedGroups: { AsyncBoxedGroups, BoxedGroups },
  BranchName: { AsyncBranchName, BranchName },
}
