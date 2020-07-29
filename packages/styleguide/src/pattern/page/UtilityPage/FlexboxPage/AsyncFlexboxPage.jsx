import React from 'react'
import { defaultProps, propTypes } from './FlexboxPage.prop'

const LazyFlexboxPage = React.lazy(() => import('./FlexboxPage'))

export function AsyncFlexboxPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyFlexboxPage />
    </React.Suspense>
  )
}

AsyncFlexboxPage.defaultProps = defaultProps

AsyncFlexboxPage.propTypes = propTypes
