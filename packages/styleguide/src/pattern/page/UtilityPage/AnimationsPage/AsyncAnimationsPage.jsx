import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './AnimationsPage.prop'

const LazyAnimationsPage = lazy(() => import('./AnimationsPage'))

export function AsyncAnimationsPage() {
  return (
    <Suspense fallback={null}>
      <LazyAnimationsPage />
    </Suspense>
  )
}

AsyncAnimationsPage.defaultProps = defaultProps

AsyncAnimationsPage.propTypes = propTypes
