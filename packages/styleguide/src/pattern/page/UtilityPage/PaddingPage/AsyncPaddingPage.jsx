import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './PaddingPage.prop'

const LazyPaddingPage = lazy(() => import('./PaddingPage'))

export function AsyncPaddingPage() {
  return (
    <Suspense fallback={null}>
      <LazyPaddingPage />
    </Suspense>
  )
}

AsyncPaddingPage.defaultProps = defaultProps

AsyncPaddingPage.propTypes = propTypes
