import React from 'react'
import { boxedGroupsPageDefaultProps, boxedGroupsPagePropTypes } from './BoxedGroupsPage.prop'

const LazyBoxedGroupsPage = React.lazy(() => import('./BoxedGroupsPage'))

export function AsyncBoxedGroupsPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBoxedGroupsPage />
    </React.Suspense>
  )
}

AsyncBoxedGroupsPage.defaultProps = boxedGroupsPageDefaultProps

AsyncBoxedGroupsPage.propTypes = boxedGroupsPagePropTypes
