import { Fragment } from 'react'
import { defaultProps, propTypes } from './AnimationsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './AnimationsTemplate.MainContent'

export function AnimationsTemplate() {
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

AnimationsTemplate.defaultProps = defaultProps

AnimationsTemplate.propTypes = propTypes
