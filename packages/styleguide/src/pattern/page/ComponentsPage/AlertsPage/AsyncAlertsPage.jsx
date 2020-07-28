import React from 'react'
import { defaultProps, propTypes } from './AlertsPage.prop'

const LazyAlertsPage = React.lazy(() => import('./AlertsPage'))

export function AsyncAlertsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyAlertsPage />
    </React.Suspense>
  )
}

AsyncAlertsPage.defaultProps = defaultProps

AsyncAlertsPage.propTypes = propTypes
