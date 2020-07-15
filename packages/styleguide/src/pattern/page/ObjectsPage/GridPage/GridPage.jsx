import React from 'react'
import { ObjectsTemplate } from '../../../template/ObjectsTemplate'
import { gridPageDefaultProps, gridPagePropTypes } from './GridPage.prop'

export function GridPage() {
  return <ObjectsTemplate.Grid />
}

GridPage.defaultProps = gridPageDefaultProps

GridPage.propTypes = gridPagePropTypes

// Default export is required to use with React.lazy()
export default GridPage
