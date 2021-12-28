import { AsyncGettingStartedPage, GettingStartedPage } from '../pattern/page/GettingStartedPage'
import { gettingStartedPagePath } from './path'

export const gettingStartedPageRoute = {
  path: gettingStartedPagePath,
  clientComponent: AsyncGettingStartedPage,
  serverComponent: GettingStartedPage,
}
