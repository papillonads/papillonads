import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './NotFoundPage.prop'

const LazyNotFoundPage = lazy(() => import('./NotFoundPage'))

export function AsyncNotFoundPage({ location }) {
  return (
    <Suspense fallback={null}>
      <LazyNotFoundPage location={location} />
    </Suspense>
  )
}

AsyncNotFoundPage.defaultProps = defaultProps

AsyncNotFoundPage.propTypes = propTypes
