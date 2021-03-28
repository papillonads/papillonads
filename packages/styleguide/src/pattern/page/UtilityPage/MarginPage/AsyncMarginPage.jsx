import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './MarginPage.prop'

const LazyMarginPage = lazy(() => import('./MarginPage'))

export function AsyncMarginPage() {
  return (
    <Suspense fallback={null}>
      <LazyMarginPage />
    </Suspense>
  )
}

AsyncMarginPage.defaultProps = defaultProps

AsyncMarginPage.propTypes = propTypes
