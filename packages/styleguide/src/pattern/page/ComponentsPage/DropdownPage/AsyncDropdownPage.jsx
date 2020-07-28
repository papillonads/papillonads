import React from 'react'
import { dropdownPageDefaultProps, dropdownPagePropTypes } from './DropdownPage.prop'

const LazyDropdownPage = React.lazy(() => import('./DropdownPage'))

export function AsyncDropdownPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyDropdownPage />
    </React.Suspense>
  )
}

AsyncDropdownPage.defaultProps = dropdownPageDefaultProps

AsyncDropdownPage.propTypes = dropdownPagePropTypes
