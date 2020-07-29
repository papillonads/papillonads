import React from 'react'
import { SupportTemplate } from '../../../template/SupportTemplate'
import { defaultProps, propTypes } from './TypographyPage.prop'

export function TypographyPage() {
  return <SupportTemplate.Typography />
}

TypographyPage.defaultProps = defaultProps

TypographyPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default TypographyPage
