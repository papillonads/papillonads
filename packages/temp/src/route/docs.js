import { AsyncDocsPage, DocsPage } from '../pattern/page/DocsPage'
import { docsPagePath } from './path'

export const docsPageRoute = {
  path: docsPagePath,
  exact: true,
  clientComponent: AsyncDocsPage,
  serverComponent: DocsPage,
}
