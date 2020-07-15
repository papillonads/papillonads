import React from 'react'
import { docsPageDefaultProps, docsPagePropTypes } from './DocsPage.prop'

const LazyDocsPage = React.lazy(() => import('./DocsPage'))

export function AsyncDocsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyDocsPage />
    </React.Suspense>
  )
}

AsyncDocsPage.defaultProps = docsPageDefaultProps

AsyncDocsPage.propTypes = docsPagePropTypes
