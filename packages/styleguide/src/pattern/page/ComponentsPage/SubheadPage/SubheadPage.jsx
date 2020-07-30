import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './SubheadPage.prop'

export function SubheadPage() {
  return <ComponentsTemplate.Subhead />
}

SubheadPage.defaultProps = defaultProps

SubheadPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default SubheadPage
