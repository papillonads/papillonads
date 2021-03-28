import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './ButtonsPage.prop'

const LazyButtonsPage = lazy(() => import('./ButtonsPage'))

export function AsyncButtonsPage() {
  return (
    <Suspense fallback={null}>
      <LazyButtonsPage />
    </Suspense>
  )
}

AsyncButtonsPage.defaultProps = defaultProps

AsyncButtonsPage.propTypes = propTypes
