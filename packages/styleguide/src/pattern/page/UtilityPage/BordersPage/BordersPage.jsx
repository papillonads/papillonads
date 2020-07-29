import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { defaultProps, propTypes } from './BordersPage.prop'

export function BordersPage() {
  return <UtilityTemplate.Borders />
}

BordersPage.defaultProps = defaultProps

BordersPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default BordersPage
