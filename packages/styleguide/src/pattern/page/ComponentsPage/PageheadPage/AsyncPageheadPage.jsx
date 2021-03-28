import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './PageheadPage.prop'

const LazyPageheadPage = lazy(() => import('./PageheadPage'))

export function AsyncPageheadPage() {
  return (
    <Suspense fallback={null}>
      <LazyPageheadPage />
    </Suspense>
  )
}

AsyncPageheadPage.defaultProps = defaultProps

AsyncPageheadPage.propTypes = propTypes
