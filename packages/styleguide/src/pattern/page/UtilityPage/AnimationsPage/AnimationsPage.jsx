import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { defaultProps, propTypes } from './AnimationsPage.prop'

export function AnimationsPage() {
  return <UtilityTemplate.Animations />
}

AnimationsPage.defaultProps = defaultProps

AnimationsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default AnimationsPage
