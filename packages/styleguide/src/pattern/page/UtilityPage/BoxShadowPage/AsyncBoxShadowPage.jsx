import React from 'react'
import { boxShadowPageDefaultProps, boxShadowPagePropTypes } from './BoxShadowPage.prop'

const LazyBoxShadowPage = React.lazy(() => import('./BoxShadowPage'))

export function AsyncBoxShadowPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBoxShadowPage />
    </React.Suspense>
  )
}

AsyncBoxShadowPage.defaultProps = boxShadowPageDefaultProps

AsyncBoxShadowPage.propTypes = boxShadowPagePropTypes
