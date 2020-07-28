import React from 'react'
import { defaultProps, propTypes } from './BoxedGroupsPage.prop'

const LazyBoxedGroupsPage = React.lazy(() => import('./BoxedGroupsPage'))

export function AsyncBoxedGroupsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBoxedGroupsPage />
    </React.Suspense>
  )
}

AsyncBoxedGroupsPage.defaultProps = defaultProps

AsyncBoxedGroupsPage.propTypes = propTypes
