import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './MarkdownPage.prop'

export function MarkdownPage() {
  return <ComponentsTemplate.Markdown />
}

MarkdownPage.defaultProps = defaultProps

MarkdownPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default MarkdownPage
