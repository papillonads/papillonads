import { Fragment } from 'react'
import { defaultProps, propTypes } from './MarketingBordersTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MarketingBordersTemplate.MainContent'

export function MarketingBordersTemplate() {
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

MarketingBordersTemplate.defaultProps = defaultProps

MarketingBordersTemplate.propTypes = propTypes
