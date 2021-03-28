import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './PageHeadersPage.prop'

const LazyPageHeadersPage = lazy(() => import('./PageHeadersPage'))

export function AsyncPageHeadersPage() {
  return (
    <Suspense fallback={null}>
      <LazyPageHeadersPage />
    </Suspense>
  )
}

AsyncPageHeadersPage.defaultProps = defaultProps

AsyncPageHeadersPage.propTypes = propTypes
