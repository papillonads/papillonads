import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './OcticonsPage.prop'

export function OcticonsPage() {
  return <ComponentsTemplate.Octicons />
}

OcticonsPage.defaultProps = defaultProps

OcticonsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default OcticonsPage
