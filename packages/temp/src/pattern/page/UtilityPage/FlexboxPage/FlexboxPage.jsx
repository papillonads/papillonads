import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { flexboxPageDefaultProps, flexboxPagePropTypes } from './FlexboxPage.prop'

export function FlexboxPage() {
  return <UtilityTemplate.Flexbox />
}

FlexboxPage.defaultProps = flexboxPageDefaultProps

FlexboxPage.propTypes = flexboxPagePropTypes

// Default export is required to use with React.lazy()
export default FlexboxPage
