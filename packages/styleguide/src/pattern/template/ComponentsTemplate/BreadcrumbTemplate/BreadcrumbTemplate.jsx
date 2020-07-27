import React from 'react'
import { breadcrumbTemplateDefaultProps, breadcrumbTemplatePropTypes } from './BreadcrumbTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './BreadcrumbTemplate.MainContent'

export function BreadcrumbTemplate() {
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

BreadcrumbTemplate.defaultProps = breadcrumbTemplateDefaultProps

BreadcrumbTemplate.propTypes = breadcrumbTemplatePropTypes