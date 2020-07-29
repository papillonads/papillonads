import React from 'react'
import { ObjectsTemplate } from '../../../template/ObjectsTemplate'
import { defaultProps, propTypes } from './TableObjectPage.prop'

export function TableObjectPage() {
  return <ObjectsTemplate.TableObject />
}

TableObjectPage.defaultProps = defaultProps

TableObjectPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default TableObjectPage
