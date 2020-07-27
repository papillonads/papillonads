import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { alertsPageDefaultProps, alertsPagePropTypes } from './AlertsPage.prop'

export function AlertsPage() {
  return <ComponentsTemplate.Alerts />
}

AlertsPage.defaultProps = alertsPageDefaultProps

AlertsPage.propTypes = alertsPagePropTypes

// Default export is required to use with React.lazy()
export default AlertsPage
