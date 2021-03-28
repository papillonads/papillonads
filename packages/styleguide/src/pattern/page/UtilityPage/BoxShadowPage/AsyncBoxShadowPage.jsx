import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './BoxShadowPage.prop'

const LazyBoxShadowPage = lazy(() => import('./BoxShadowPage'))

export function AsyncBoxShadowPage() {
  return (
    <Suspense fallback={null}>
      <LazyBoxShadowPage />
    </Suspense>
  )
}

AsyncBoxShadowPage.defaultProps = defaultProps

AsyncBoxShadowPage.propTypes = propTypes
