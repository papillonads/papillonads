import { Fragment } from 'react'
import { defaultProps, propTypes } from './FlashBannerTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './FlashBannerTemplate.MainContent'

export function FlashBannerTemplate() {
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

FlashBannerTemplate.defaultProps = defaultProps

FlashBannerTemplate.propTypes = propTypes
