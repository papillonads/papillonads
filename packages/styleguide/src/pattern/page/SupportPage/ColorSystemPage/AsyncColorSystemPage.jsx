import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './ColorSystemPage.prop'

const LazyColorSystemPage = lazy(() => import('./ColorSystemPage'))

export function AsyncColorSystemPage() {
  return (
    <Suspense fallback={null}>
      <LazyColorSystemPage />
    </Suspense>
  )
}

AsyncColorSystemPage.defaultProps = defaultProps

AsyncColorSystemPage.propTypes = propTypes
