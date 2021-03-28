import { SupportTemplate } from '../../../template/SupportTemplate'
import { defaultProps, propTypes } from './ColorSystemPage.prop'

export function ColorSystemPage() {
  return <SupportTemplate.ColorSystem />
}

ColorSystemPage.defaultProps = defaultProps

ColorSystemPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default ColorSystemPage
