import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './MarkdownPage.prop'

const LazyMarkdownPage = lazy(() => import('./MarkdownPage'))

export function AsyncMarkdownPage() {
  return (
    <Suspense fallback={null}>
      <LazyMarkdownPage />
    </Suspense>
  )
}

AsyncMarkdownPage.defaultProps = defaultProps

AsyncMarkdownPage.propTypes = propTypes
