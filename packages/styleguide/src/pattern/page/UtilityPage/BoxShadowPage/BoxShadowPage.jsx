import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { defaultProps, propTypes } from './BoxShadowPage.prop'

export function BoxShadowPage() {
  return <UtilityTemplate.BoxShadow />
}

BoxShadowPage.defaultProps = defaultProps

BoxShadowPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default BoxShadowPage
