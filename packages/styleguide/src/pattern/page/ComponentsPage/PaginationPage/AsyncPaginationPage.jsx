import React from 'react'
import { defaultProps, propTypes } from './PaginationPage.prop'

const LazyPaginationPage = React.lazy(() => import('./PaginationPage'))

export function AsyncPaginationPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyPaginationPage />
    </React.Suspense>
  )
}

AsyncPaginationPage.defaultProps = defaultProps

AsyncPaginationPage.propTypes = propTypes
