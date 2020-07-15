import React from 'react'
import { marketingMarginTemplateDefaultProps, marketingMarginTemplatePropTypes } from './MarketingMarginTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MarketingMarginTemplate.MainContent'

export function MarketingMarginTemplate() {
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

MarketingMarginTemplate.defaultProps = marketingMarginTemplateDefaultProps

MarketingMarginTemplate.propTypes = marketingMarginTemplatePropTypes
