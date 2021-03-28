import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './DropdownPage.prop'

const LazyDropdownPage = lazy(() => import('./DropdownPage'))

export function AsyncDropdownPage() {
  return (
    <Suspense fallback={null}>
      <LazyDropdownPage />
    </Suspense>
  )
}

AsyncDropdownPage.defaultProps = defaultProps

AsyncDropdownPage.propTypes = propTypes
