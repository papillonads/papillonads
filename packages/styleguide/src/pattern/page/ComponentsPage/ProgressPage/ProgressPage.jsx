import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './ProgressPage.prop'

export function ProgressPage() {
  return <ComponentsTemplate.Progress />
}

ProgressPage.defaultProps = defaultProps

ProgressPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default ProgressPage
