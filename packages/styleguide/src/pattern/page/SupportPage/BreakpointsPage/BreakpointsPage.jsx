import React from 'react'
import { SupportTemplate } from '../../../template/SupportTemplate'
import { defaultProps, propTypes } from './BreakpointsPage.prop'

export function BreakpointsPage() {
  return <SupportTemplate.Breakpoints />
}

BreakpointsPage.defaultProps = defaultProps

BreakpointsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default BreakpointsPage
