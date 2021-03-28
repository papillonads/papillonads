import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './ColorsPage.prop'

const LazyColorsPage = lazy(() => import('./ColorsPage'))

export function AsyncColorsPage() {
  return (
    <Suspense fallback={null}>
      <LazyColorsPage />
    </Suspense>
  )
}

AsyncColorsPage.defaultProps = defaultProps

AsyncColorsPage.propTypes = propTypes
