import React from 'react'
import { defaultProps, propTypes } from './MarkdownPage.prop'

const LazyMarkdownPage = React.lazy(() => import('./MarkdownPage'))

export function AsyncMarkdownPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarkdownPage />
    </React.Suspense>
  )
}

AsyncMarkdownPage.defaultProps = defaultProps

AsyncMarkdownPage.propTypes = propTypes
