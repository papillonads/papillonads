import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { bordersPageDefaultProps, bordersPagePropTypes } from './BordersPage.prop'

export function BordersPage() {
  return <UtilityTemplate.Borders />
}

BordersPage.defaultProps = bordersPageDefaultProps

BordersPage.propTypes = bordersPagePropTypes

// Default export is required to use with React.lazy()
export default BordersPage
