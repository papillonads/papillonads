import React from 'react'
import { spacingPageDefaultProps, spacingPagePropTypes } from './SpacingPage.prop'

const LazySpacingPage = React.lazy(() => import('./SpacingPage'))

export function AsyncSpacingPage() {
  return (
    <React.Suspense fallback={null}>
      <LazySpacingPage />
    </React.Suspense>
  )
}

AsyncSpacingPage.defaultProps = spacingPageDefaultProps

AsyncSpacingPage.propTypes = spacingPagePropTypes
