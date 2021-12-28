import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const branchNameRoute = {
  path: componentsPagePath.branchName,
  clientComponent: ComponentsPage.BranchName.AsyncBranchName,
  serverComponent: ComponentsPage.BranchName.BranchName,
}
