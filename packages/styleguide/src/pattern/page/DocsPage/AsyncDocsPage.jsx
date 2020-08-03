import React from 'react'
import { defaultProps, propTypes } from './DocsPage.prop'

const LazyDocsPage = React.lazy(() => import('./DocsPage'))

export function AsyncDocsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyDocsPage />
    </React.Suspense>
  )
}

AsyncDocsPage.defaultProps = defaultProps

AsyncDocsPage.propTypes = propTypes
