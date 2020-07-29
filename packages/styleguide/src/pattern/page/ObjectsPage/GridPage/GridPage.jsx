import React from 'react'
import { ObjectsTemplate } from '../../../template/ObjectsTemplate'
import { defaultProps, propTypes } from './GridPage.prop'

export function GridPage() {
  return <ObjectsTemplate.Grid />
}

GridPage.defaultProps = defaultProps

GridPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default GridPage
