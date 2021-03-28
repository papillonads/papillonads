import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { defaultProps, propTypes } from './FlexboxPage.prop'

export function FlexboxPage() {
  return <UtilityTemplate.Flexbox />
}

FlexboxPage.defaultProps = defaultProps

FlexboxPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default FlexboxPage
