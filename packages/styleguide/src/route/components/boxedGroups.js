import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const boxedGroupsRoute = {
  path: componentsPagePath.boxedGroups,
  exact: true,
  clientComponent: ComponentsPage.BoxedGroups.AsyncBoxedGroups,
  serverComponent: ComponentsPage.BoxedGroups.BoxedGroups,
}
