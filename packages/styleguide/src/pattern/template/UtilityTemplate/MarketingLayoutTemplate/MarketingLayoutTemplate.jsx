import { Fragment } from 'react'
import { defaultProps, propTypes } from './MarketingLayoutTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MarketingLayoutTemplate.MainContent'

export function MarketingLayoutTemplate() {
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

MarketingLayoutTemplate.defaultProps = defaultProps

MarketingLayoutTemplate.propTypes = propTypes
