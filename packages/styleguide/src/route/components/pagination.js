import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const paginationRoute = {
  path: componentsPagePath.pagination,
  clientComponent: ComponentsPage.Pagination.AsyncPagination,
  serverComponent: ComponentsPage.Pagination.Pagination,
}
