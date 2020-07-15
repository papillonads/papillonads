import React from 'react'
import { objectsPageDefaultProps, objectsPagePropTypes } from './ObjectsPage.prop'

const LazyObjectsPage = React.lazy(() => import('./ObjectsPage'))

export function AsyncObjectsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyObjectsPage />
    </React.Suspense>
  )
}

AsyncObjectsPage.defaultProps = objectsPageDefaultProps

AsyncObjectsPage.propTypes = objectsPagePropTypes
