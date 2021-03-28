import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './DetailsPage.prop'

const LazyDetailsPage = lazy(() => import('./DetailsPage'))

export function AsyncDetailsPage() {
  return (
    <Suspense fallback={null}>
      <LazyDetailsPage />
    </Suspense>
  )
}

AsyncDetailsPage.defaultProps = defaultProps

AsyncDetailsPage.propTypes = propTypes
