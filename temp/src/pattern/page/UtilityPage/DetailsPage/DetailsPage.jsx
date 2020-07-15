import React from 'react'
import { UtilityTemplate } from '../../../template/UtilityTemplate'
import { detailsPageDefaultProps, detailsPagePropTypes } from './DetailsPage.prop'

export function DetailsPage() {
  return <UtilityTemplate.Details />
}

DetailsPage.defaultProps = detailsPageDefaultProps

DetailsPage.propTypes = detailsPagePropTypes

// Default export is required to use with React.lazy()
export default DetailsPage
