import React from 'react'
import { SupportTemplate } from '../../../template/SupportTemplate'
import { defaultProps, propTypes } from './SpacingPage.prop'

export function SpacingPage() {
  return <SupportTemplate.Spacing />
}

SpacingPage.defaultProps = defaultProps

SpacingPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default SpacingPage
