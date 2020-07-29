import React from 'react'
import { DocsTemplate } from '../../template/DocsTemplate'
import { defaultProps, propTypes } from './DocsPage.prop'

export function DocsPage() {
  return <DocsTemplate />
}

DocsPage.defaultProps = defaultProps

DocsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default DocsPage
