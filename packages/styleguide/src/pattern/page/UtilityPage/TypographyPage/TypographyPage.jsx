import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { typographyPageDefaultProps, typographyPagePropTypes } from './TypographyPage.prop'

export function TypographyPage() {
  return <UtilityTemplate.Typography />
}

TypographyPage.defaultProps = typographyPageDefaultProps

TypographyPage.propTypes = typographyPagePropTypes

// Default export is required to use with React.lazy()
export default TypographyPage
