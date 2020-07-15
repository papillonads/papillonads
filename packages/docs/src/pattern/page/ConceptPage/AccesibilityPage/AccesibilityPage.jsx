import React from 'react'
import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './AccesibilityPage.prop'

export function AccesibilityPage() {
  return <ConceptTemplate.Accesibility />
}

AccesibilityPage.defaultProps = defaultProps

AccesibilityPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default AccesibilityPage
