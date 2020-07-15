import React from 'react'
import { flexboxPageDefaultProps, flexboxPagePropTypes } from './FlexboxPage.prop'

const LazyFlexboxPage = React.lazy(() => import('./FlexboxPage'))

export function AsyncFlexboxPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyFlexboxPage />
    </React.Suspense>
  )
}

AsyncFlexboxPage.defaultProps = flexboxPageDefaultProps

AsyncFlexboxPage.propTypes = flexboxPagePropTypes
