import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './FlexboxPage.prop'

const LazyFlexboxPage = lazy(() => import('./FlexboxPage'))

export function AsyncFlexboxPage() {
  return (
    <Suspense fallback={null}>
      <LazyFlexboxPage />
    </Suspense>
  )
}

AsyncFlexboxPage.defaultProps = defaultProps

AsyncFlexboxPage.propTypes = propTypes
