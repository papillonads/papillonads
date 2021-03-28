import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './BoxOverlayPage.prop'

export function BoxOverlayPage() {
  return <ComponentsTemplate.BoxOverlay />
}

BoxOverlayPage.defaultProps = defaultProps

BoxOverlayPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default BoxOverlayPage
