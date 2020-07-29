import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const markdownRoute = {
  path: componentsPagePath.markdown,
  exact: true,
  clientComponent: ComponentsPage.Markdown.AsyncMarkdown,
  serverComponent: ComponentsPage.Markdown.Markdown,
}
