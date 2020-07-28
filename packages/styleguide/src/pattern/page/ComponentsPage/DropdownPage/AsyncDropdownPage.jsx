import React from 'react'
import { defaultProps, propTypes } from './DropdownPage.prop'

const LazyDropdownPage = React.lazy(() => import('./DropdownPage'))

export function AsyncDropdownPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyDropdownPage />
    </React.Suspense>
  )
}

AsyncDropdownPage.defaultProps = defaultProps

AsyncDropdownPage.propTypes = propTypes
