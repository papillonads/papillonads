import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './ObjectsPage.prop'

const LazyObjectsPage = lazy(() => import('./ObjectsPage'))

export function AsyncObjectsPage() {
  return (
    <Suspense fallback={null}>
      <LazyObjectsPage />
    </Suspense>
  )
}

AsyncObjectsPage.defaultProps = defaultProps

AsyncObjectsPage.propTypes = propTypes
