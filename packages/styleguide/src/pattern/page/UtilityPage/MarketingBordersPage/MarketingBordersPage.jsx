import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { defaultProps, propTypes } from './MarketingBordersPage.prop'

export function MarketingBordersPage() {
  return <UtilityTemplate.MarketingBorders />
}

MarketingBordersPage.defaultProps = defaultProps

MarketingBordersPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default MarketingBordersPage
