import React from 'react'
import { defaultProps, propTypes } from './ComponentsPage.prop'

const LazyComponentsPage = React.lazy(() => import('./ComponentsPage'))

export function AsyncComponentsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyComponentsPage />
    </React.Suspense>
  )
}

AsyncComponentsPage.defaultProps = defaultProps

AsyncComponentsPage.propTypes = propTypes
