import React from 'react'
import { SupportTemplate } from '../../../template/SupportTemplate'
import { breakpointsPageDefaultProps, breakpointsPagePropTypes } from './BreakpointsPage.prop'

export function BreakpointsPage() {
  return <SupportTemplate.Breakpoints />
}

BreakpointsPage.defaultProps = breakpointsPageDefaultProps

BreakpointsPage.propTypes = breakpointsPagePropTypes

// Default export is required to use with React.lazy()
export default BreakpointsPage
