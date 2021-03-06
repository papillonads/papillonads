import { Fragment } from 'react'
import { defaultProps, propTypes } from './AvatarsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './AvatarsTemplate.MainContent'

export function AvatarsTemplate() {
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

AvatarsTemplate.defaultProps = defaultProps

AvatarsTemplate.propTypes = propTypes
