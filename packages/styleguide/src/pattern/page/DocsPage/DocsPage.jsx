import React from 'react'
import { DocsTemplate } from '../../template/DocsTemplate'
import { docsPageDefaultProps, docsPagePropTypes } from './DocsPage.prop'

export function DocsPage() {
  return <DocsTemplate />
}

DocsPage.defaultProps = docsPageDefaultProps

DocsPage.propTypes = docsPagePropTypes

// Default export is required to use with React.lazy()
export default DocsPage
