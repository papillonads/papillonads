import React from 'react'
import { marketingVariablesTemplateDefaultProps, marketingVariablesTemplatePropTypes } from './MarketingVariablesTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MarketingVariablesTemplate.MainContent'

export function MarketingVariablesTemplate() {
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

MarketingVariablesTemplate.defaultProps = marketingVariablesTemplateDefaultProps

MarketingVariablesTemplate.propTypes = marketingVariablesTemplatePropTypes
