import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './AvatarsPage.prop'

export function AvatarsPage() {
  return <ComponentsTemplate.Avatars />
}

AvatarsPage.defaultProps = defaultProps

AvatarsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default AvatarsPage
