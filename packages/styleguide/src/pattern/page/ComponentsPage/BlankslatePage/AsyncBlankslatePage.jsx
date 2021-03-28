import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './BlankslatePage.prop'

const LazyBlankslatePage = lazy(() => import('./BlankslatePage'))

export function AsyncBlankslatePage() {
  return (
    <Suspense fallback={null}>
      <LazyBlankslatePage />
    </Suspense>
  )
}

AsyncBlankslatePage.defaultProps = defaultProps

AsyncBlankslatePage.propTypes = propTypes
