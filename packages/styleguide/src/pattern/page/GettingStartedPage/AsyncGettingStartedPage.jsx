import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './GettingStartedPage.prop'

const LazyGettingStartedPage = lazy(() => import('./GettingStartedPage'))

export function AsyncGettingStartedPage() {
  return (
    <Suspense fallback={null}>
      <LazyGettingStartedPage />
    </Suspense>
  )
}

AsyncGettingStartedPage.defaultProps = defaultProps

AsyncGettingStartedPage.propTypes = propTypes
