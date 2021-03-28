import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './UtilityPage.prop'

const LazyUtilityPage = lazy(() => import('./UtilityPage'))

export function AsyncUtilityPage() {
  return (
    <Suspense fallback={null}>
      <LazyUtilityPage />
    </Suspense>
  )
}

AsyncUtilityPage.defaultProps = defaultProps

AsyncUtilityPage.propTypes = propTypes
