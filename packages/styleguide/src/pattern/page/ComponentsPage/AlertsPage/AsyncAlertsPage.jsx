import React from 'react'
import { alertsPageDefaultProps, alertsPagePropTypes } from './AlertsPage.prop'

const LazyAlertsPage = React.lazy(() => import('./AlertsPage'))

export function AsyncAlertsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyAlertsPage />
    </React.Suspense>
  )
}

AsyncAlertsPage.defaultProps = alertsPageDefaultProps

AsyncAlertsPage.propTypes = alertsPagePropTypes
