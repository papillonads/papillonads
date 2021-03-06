import { Fragment } from 'react'
import { defaultProps, propTypes } from './MarketingMarginTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MarketingMarginTemplate.MainContent'

export function MarketingMarginTemplate() {
  return (
    <Fragment>
      <Navigation />
      <FlashAlert />
      <div className="d-flex flex-wrap flex-lg-nowrap">
        <MainContent />
        <SideBar />
      </div>
    </Fragment>
  )
}

MarketingMarginTemplate.defaultProps = defaultProps

MarketingMarginTemplate.propTypes = propTypes
