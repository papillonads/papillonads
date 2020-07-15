import React from 'react'
import { SupportTemplate } from '../../../template/SupportTemplate'
import { spacingPageDefaultProps, spacingPagePropTypes } from './SpacingPage.prop'

export function SpacingPage() {
  return <SupportTemplate.Spacing />
}

SpacingPage.defaultProps = spacingPageDefaultProps

SpacingPage.propTypes = spacingPagePropTypes

// Default export is required to use with React.lazy()
export default SpacingPage
