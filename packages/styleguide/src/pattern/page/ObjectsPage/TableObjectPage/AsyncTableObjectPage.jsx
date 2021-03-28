import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './TableObjectPage.prop'

const LazyTableObjectPage = lazy(() => import('./TableObjectPage'))

export function AsyncTableObjectPage() {
  return (
    <Suspense fallback={null}>
      <LazyTableObjectPage />
    </Suspense>
  )
}

AsyncTableObjectPage.defaultProps = defaultProps

AsyncTableObjectPage.propTypes = propTypes
