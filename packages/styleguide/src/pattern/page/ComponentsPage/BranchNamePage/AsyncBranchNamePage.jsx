import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './BranchNamePage.prop'

const LazyBranchNamePage = lazy(() => import('./BranchNamePage'))

export function AsyncBranchNamePage() {
  return (
    <Suspense fallback={null}>
      <LazyBranchNamePage />
    </Suspense>
  )
}

AsyncBranchNamePage.defaultProps = defaultProps

AsyncBranchNamePage.propTypes = propTypes
