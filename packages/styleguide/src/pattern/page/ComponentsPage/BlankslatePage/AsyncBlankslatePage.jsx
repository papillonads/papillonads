import React from 'react'
import { blankslatePageDefaultProps, blankslatePagePropTypes } from './BlankslatePage.prop'

const LazyBlankslatePage = React.lazy(() => import('./BlankslatePage'))

export function AsyncBlankslatePage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBlankslatePage />
    </React.Suspense>
  )
}

AsyncBlankslatePage.defaultProps = blankslatePageDefaultProps

AsyncBlankslatePage.propTypes = blankslatePagePropTypes
