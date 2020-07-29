import React from 'react'
import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './LabelsPage.prop'

export function LabelsPage() {
  return <ComponentsTemplate.Labels />
}

LabelsPage.defaultProps = defaultProps

LabelsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default LabelsPage
