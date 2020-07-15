import React from 'react'
import { marketingFiltersTemplateDefaultProps, marketingFiltersTemplatePropTypes } from './MarketingFiltersTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MarketingFiltersTemplate.MainContent'

export function MarketingFiltersTemplate() {
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

MarketingFiltersTemplate.defaultProps = marketingFiltersTemplateDefaultProps

MarketingFiltersTemplate.propTypes = marketingFiltersTemplatePropTypes
