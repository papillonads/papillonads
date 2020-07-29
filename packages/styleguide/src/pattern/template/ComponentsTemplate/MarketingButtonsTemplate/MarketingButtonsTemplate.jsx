import React from 'react'
import { defaultProps, propTypes } from './MarketingButtonsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MarketingButtonsTemplate.MainContent'

export function MarketingButtonsTemplate() {
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

MarketingButtonsTemplate.defaultProps = defaultProps

MarketingButtonsTemplate.propTypes = propTypes
