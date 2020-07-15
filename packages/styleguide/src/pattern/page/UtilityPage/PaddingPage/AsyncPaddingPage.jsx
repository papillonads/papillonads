import React from 'react'
import { paddingPageDefaultProps, paddingPagePropTypes } from './PaddingPage.prop'

const LazyPaddingPage = React.lazy(() => import('./PaddingPage'))

export function AsyncPaddingPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyPaddingPage />
    </React.Suspense>
  )
}

AsyncPaddingPage.defaultProps = paddingPageDefaultProps

AsyncPaddingPage.propTypes = paddingPagePropTypes
