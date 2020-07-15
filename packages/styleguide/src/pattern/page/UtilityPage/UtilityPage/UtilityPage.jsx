import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { utilityPageDefaultProps, utilityPagePropTypes } from './UtilityPage.prop'

export function UtilityPage() {
  return <UtilityTemplate.Utility />
}

UtilityPage.defaultProps = utilityPageDefaultProps

UtilityPage.propTypes = utilityPagePropTypes

// Default export is required to use with React.lazy()
export default UtilityPage
