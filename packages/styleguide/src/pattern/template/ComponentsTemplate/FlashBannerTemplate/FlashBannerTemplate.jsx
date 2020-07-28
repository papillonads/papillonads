import React from 'react'
import { flashBannerTemplateDefaultProps, flashBannerTemplatePropTypes } from './FlashBannerTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './FlashBannerTemplate.MainContent'

export function FlashBannerTemplate() {
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

FlashBannerTemplate.defaultProps = flashBannerTemplateDefaultProps

FlashBannerTemplate.propTypes = flashBannerTemplatePropTypes
