import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './BoxPage.prop'

const LazyBoxPage = lazy(() => import('./BoxPage'))

export function AsyncBoxPage() {
  return (
    <Suspense fallback={null}>
      <LazyBoxPage />
    </Suspense>
  )
}

AsyncBoxPage.defaultProps = defaultProps

AsyncBoxPage.propTypes = propTypes
