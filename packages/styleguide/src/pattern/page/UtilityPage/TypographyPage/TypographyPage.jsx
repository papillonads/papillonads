import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { defaultProps, propTypes } from './TypographyPage.prop'

export function TypographyPage() {
  return <UtilityTemplate.Typography />
}

TypographyPage.defaultProps = defaultProps

TypographyPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default TypographyPage
