import { Fragment } from 'react'
import { defaultProps, propTypes } from './MarketingTypographyTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MarketingTypographyTemplate.MainContent'

export function MarketingTypographyTemplate() {
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

MarketingTypographyTemplate.defaultProps = defaultProps

MarketingTypographyTemplate.propTypes = propTypes
