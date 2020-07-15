import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { boxShadowPageDefaultProps, boxShadowPagePropTypes } from './BoxShadowPage.prop'

export function BoxShadowPage() {
  return <UtilityTemplate.BoxShadow />
}

BoxShadowPage.defaultProps = boxShadowPageDefaultProps

BoxShadowPage.propTypes = boxShadowPagePropTypes

// Default export is required to use with React.lazy()
export default BoxShadowPage
