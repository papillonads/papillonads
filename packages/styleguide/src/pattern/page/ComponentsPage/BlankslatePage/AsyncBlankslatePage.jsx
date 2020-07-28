import React from 'react'
import { defaultProps, propTypes } from './BlankslatePage.prop'

const LazyBlankslatePage = React.lazy(() => import('./BlankslatePage'))

export function AsyncBlankslatePage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBlankslatePage />
    </React.Suspense>
  )
}

AsyncBlankslatePage.defaultProps = defaultProps

AsyncBlankslatePage.propTypes = propTypes
