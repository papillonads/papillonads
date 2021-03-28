import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './PopoverPage.prop'

const LazyPopoverPage = lazy(() => import('./PopoverPage'))

export function AsyncPopoverPage() {
  return (
    <Suspense fallback={null}>
      <LazyPopoverPage />
    </Suspense>
  )
}

AsyncPopoverPage.defaultProps = defaultProps

AsyncPopoverPage.propTypes = propTypes
