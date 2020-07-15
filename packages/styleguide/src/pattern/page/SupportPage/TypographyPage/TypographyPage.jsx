import React from 'react'
import { SupportTemplate } from '../../../template/SupportTemplate'
import { typographyPageDefaultProps, typographyPagePropTypes } from './TypographyPage.prop'

export function TypographyPage() {
  return <SupportTemplate.Typography />
}

TypographyPage.defaultProps = typographyPageDefaultProps

TypographyPage.propTypes = typographyPagePropTypes

// Default export is required to use with React.lazy()
export default TypographyPage
