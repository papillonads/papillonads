import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './PaginationPage.prop'

const LazyPaginationPage = lazy(() => import('./PaginationPage'))

export function AsyncPaginationPage() {
  return (
    <Suspense fallback={null}>
      <LazyPaginationPage />
    </Suspense>
  )
}

AsyncPaginationPage.defaultProps = defaultProps

AsyncPaginationPage.propTypes = propTypes
