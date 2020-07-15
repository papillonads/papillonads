import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { paddingPageDefaultProps, paddingPagePropTypes } from './PaddingPage.prop'

export function PaddingPage() {
  return <UtilityTemplate.Padding />
}

PaddingPage.defaultProps = paddingPageDefaultProps

PaddingPage.propTypes = paddingPagePropTypes

// Default export is required to use with React.lazy()
export default PaddingPage
