import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const avatarsRoute = {
  path: componentsPagePath.avatars,
  clientComponent: ComponentsPage.Avatars.AsyncAvatars,
  serverComponent: ComponentsPage.Avatars.Avatars,
}
