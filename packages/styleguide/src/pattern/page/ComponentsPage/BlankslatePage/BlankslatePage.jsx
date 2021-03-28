import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './BlankslatePage.prop'

export function BlankslatePage() {
  return <ComponentsTemplate.Blankslate />
}

BlankslatePage.defaultProps = defaultProps

BlankslatePage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default BlankslatePage
