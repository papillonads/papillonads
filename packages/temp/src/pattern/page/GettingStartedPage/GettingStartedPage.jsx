import React from 'react'
import { GettingStartedTemplate } from '../../template/GettingStartedTemplate'
import { gettingStartedPageDefaultProps, gettingStartedPagePropTypes } from './GettingStartedPage.prop'

export function GettingStartedPage() {
  return <GettingStartedTemplate />
}

GettingStartedPage.defaultProps = gettingStartedPageDefaultProps

GettingStartedPage.propTypes = gettingStartedPagePropTypes

// Default export is required to use with React.lazy()
export default GettingStartedPage
