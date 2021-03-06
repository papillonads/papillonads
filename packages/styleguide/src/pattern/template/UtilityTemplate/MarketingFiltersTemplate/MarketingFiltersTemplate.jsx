import { Fragment } from 'react'
import { defaultProps, propTypes } from './MarketingFiltersTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MarketingFiltersTemplate.MainContent'

export function MarketingFiltersTemplate() {
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

MarketingFiltersTemplate.defaultProps = defaultProps

MarketingFiltersTemplate.propTypes = propTypes
