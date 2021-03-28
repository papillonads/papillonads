import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { defaultProps, propTypes } from './MarginPage.prop'

export function MarginPage() {
  return <UtilityTemplate.Margin />
}

MarginPage.defaultProps = defaultProps

MarginPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default MarginPage
