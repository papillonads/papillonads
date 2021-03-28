import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './AlertsPage.prop'

const LazyAlertsPage = lazy(() => import('./AlertsPage'))

export function AsyncAlertsPage() {
  return (
    <Suspense fallback={null}>
      <LazyAlertsPage />
    </Suspense>
  )
}

AsyncAlertsPage.defaultProps = defaultProps

AsyncAlertsPage.propTypes = propTypes
