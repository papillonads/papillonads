import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { defaultProps, propTypes } from './DetailsPage.prop'

export function DetailsPage() {
  return <UtilityTemplate.Details />
}

DetailsPage.defaultProps = defaultProps

DetailsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default DetailsPage
