import { GettingStartedTemplate } from '../../template/GettingStartedTemplate'
import { defaultProps, propTypes } from './GettingStartedPage.prop'

export function GettingStartedPage() {
  return <GettingStartedTemplate />
}

GettingStartedPage.defaultProps = defaultProps

GettingStartedPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default GettingStartedPage
