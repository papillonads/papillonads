import React from 'react'
import { defaultProps, propTypes } from './LanguagePage.prop'

const LazyLanguagePage = React.lazy(() => import('./LanguagePage'))

export function AsyncLanguagePage() {
  return (
    <React.Suspense fallback={null}>
      <LazyLanguagePage />
    </React.Suspense>
  )
}

AsyncLanguagePage.defaultProps = defaultProps

AsyncLanguagePage.propTypes = propTypes
