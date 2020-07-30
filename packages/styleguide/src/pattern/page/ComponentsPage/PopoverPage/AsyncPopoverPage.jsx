import React from 'react'
import { defaultProps, propTypes } from './PopoverPage.prop'

const LazyPopoverPage = React.lazy(() => import('./PopoverPage'))

export function AsyncPopoverPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyPopoverPage />
    </React.Suspense>
  )
}

AsyncPopoverPage.defaultProps = defaultProps

AsyncPopoverPage.propTypes = propTypes
