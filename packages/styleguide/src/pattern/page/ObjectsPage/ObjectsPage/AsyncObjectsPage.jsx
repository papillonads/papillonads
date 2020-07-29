import React from 'react'
import { defaultProps, propTypes } from './ObjectsPage.prop'

const LazyObjectsPage = React.lazy(() => import('./ObjectsPage'))

export function AsyncObjectsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyObjectsPage />
    </React.Suspense>
  )
}

AsyncObjectsPage.defaultProps = defaultProps

AsyncObjectsPage.propTypes = propTypes
