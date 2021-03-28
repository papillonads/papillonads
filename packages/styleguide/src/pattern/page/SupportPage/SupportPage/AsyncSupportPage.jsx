import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './SupportPage.prop'

const LazySupportPage = lazy(() => import('./SupportPage'))

export function AsyncSupportPage() {
  return (
    <Suspense fallback={null}>
      <LazySupportPage />
    </Suspense>
  )
}

AsyncSupportPage.defaultProps = defaultProps

AsyncSupportPage.propTypes = propTypes
