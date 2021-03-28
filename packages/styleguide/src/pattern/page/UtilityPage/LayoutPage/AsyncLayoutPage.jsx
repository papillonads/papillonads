import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './LayoutPage.prop'

const LazyLayoutPage = lazy(() => import('./LayoutPage'))

export function AsyncLayoutPage() {
  return (
    <Suspense fallback={null}>
      <LazyLayoutPage />
    </Suspense>
  )
}

AsyncLayoutPage.defaultProps = defaultProps

AsyncLayoutPage.propTypes = propTypes
