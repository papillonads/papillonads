import { AsyncDocsPage, DocsPage } from '../pattern/page/DocsPage'
import { docsPagePath } from './path'

export const docsPageRoute = {
  path: docsPagePath,
  clientComponent: AsyncDocsPage,
  serverComponent: DocsPage,
}
