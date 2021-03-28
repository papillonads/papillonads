import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './DocsPage.prop'

const LazyDocsPage = lazy(() => import('./DocsPage'))

export function AsyncDocsPage() {
  return (
    <Suspense fallback={null}>
      <LazyDocsPage />
    </Suspense>
  )
}

AsyncDocsPage.defaultProps = defaultProps

AsyncDocsPage.propTypes = propTypes
