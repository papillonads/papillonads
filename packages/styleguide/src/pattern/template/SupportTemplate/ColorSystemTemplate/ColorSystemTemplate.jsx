import { Fragment } from 'react'
import { defaultProps, propTypes } from './ColorSystemTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ColorSystemTemplate.MainContent'

export function ColorSystemTemplate() {
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

ColorSystemTemplate.defaultProps = defaultProps

ColorSystemTemplate.propTypes = propTypes
