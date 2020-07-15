import React from 'react'
import { detailsTemplateDefaultProps, detailsTemplatePropTypes } from './DetailsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './DetailsTemplate.MainContent'

export function DetailsTemplate() {
  return (
    <React.Fragment>
      <Navigation />
      <FlashAlert />
      <div className="d-flex flex-wrap flex-lg-nowrap">
        <MainContent />
        <SideBar />
      </div>
    </React.Fragment>
  )
}

DetailsTemplate.defaultProps = detailsTemplateDefaultProps

DetailsTemplate.propTypes = detailsTemplatePropTypes
