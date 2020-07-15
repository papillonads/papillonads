import React from 'react'
import { marketingLayoutTemplateDefaultProps, marketingLayoutTemplatePropTypes } from './MarketingLayoutTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MarketingLayoutTemplate.MainContent'

export function MarketingLayoutTemplate() {
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

MarketingLayoutTemplate.defaultProps = marketingLayoutTemplateDefaultProps

MarketingLayoutTemplate.propTypes = marketingLayoutTemplatePropTypes