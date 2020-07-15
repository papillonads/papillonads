import React from 'react'
import { layoutPageDefaultProps, layoutPagePropTypes } from './LayoutPage.prop'

const LazyLayoutPage = React.lazy(() => import('./LayoutPage'))

export function AsyncLayoutPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyLayoutPage />
    </React.Suspense>
  )
}

AsyncLayoutPage.defaultProps = layoutPageDefaultProps

AsyncLayoutPage.propTypes = layoutPagePropTypes
