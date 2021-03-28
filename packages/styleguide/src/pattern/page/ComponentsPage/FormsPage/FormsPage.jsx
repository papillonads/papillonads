import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './FormsPage.prop'

export function FormsPage() {
  return <ComponentsTemplate.Forms />
}

FormsPage.defaultProps = defaultProps

FormsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default FormsPage
