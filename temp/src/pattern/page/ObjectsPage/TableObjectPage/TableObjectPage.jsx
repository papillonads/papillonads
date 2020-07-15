import React from 'react'
import { ObjectsTemplate } from '../../../template/ObjectsTemplate'
import { tableObjectPageDefaultProps, tableObjectPagePropTypes } from './TableObjectPage.prop'

export function TableObjectPage() {
  return <ObjectsTemplate.TableObject />
}

TableObjectPage.defaultProps = tableObjectPageDefaultProps

TableObjectPage.propTypes = tableObjectPagePropTypes

// Default export is required to use with React.lazy()
export default TableObjectPage
