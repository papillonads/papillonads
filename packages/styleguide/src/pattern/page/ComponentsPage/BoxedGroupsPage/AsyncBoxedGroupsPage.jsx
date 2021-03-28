import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './BoxedGroupsPage.prop'

const LazyBoxedGroupsPage = lazy(() => import('./BoxedGroupsPage'))

export function AsyncBoxedGroupsPage() {
  return (
    <Suspense fallback={null}>
      <LazyBoxedGroupsPage />
    </Suspense>
  )
}

AsyncBoxedGroupsPage.defaultProps = defaultProps

AsyncBoxedGroupsPage.propTypes = propTypes
