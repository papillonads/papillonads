import React from 'react'
import { marginPageDefaultProps, marginPagePropTypes } from './MarginPage.prop'

const LazyMarginPage = React.lazy(() => import('./MarginPage'))

export function AsyncMarginPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyMarginPage />
    </React.Suspense>
  )
}

AsyncMarginPage.defaultProps = marginPageDefaultProps

AsyncMarginPage.propTypes = marginPagePropTypes
