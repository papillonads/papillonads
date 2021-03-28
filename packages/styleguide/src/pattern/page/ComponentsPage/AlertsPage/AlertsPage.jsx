import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './AlertsPage.prop'

export function AlertsPage() {
  return <ComponentsTemplate.Alerts />
}

AlertsPage.defaultProps = defaultProps

AlertsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default AlertsPage
