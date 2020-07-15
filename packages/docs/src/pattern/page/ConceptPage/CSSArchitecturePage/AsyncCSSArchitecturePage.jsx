import React from 'react'
import { defaultProps, propTypes } from './CSSArchitecturePage.prop'

const LazyCSSArchitecturePage = React.lazy(() => import('./CSSArchitecturePage'))

export function AsyncCSSArchitecturePage() {
  return (
    <React.Suspense fallback={null}>
      <LazyCSSArchitecturePage />
    </React.Suspense>
  )
}

AsyncCSSArchitecturePage.defaultProps = defaultProps

AsyncCSSArchitecturePage.propTypes = propTypes
