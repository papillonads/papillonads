import { Fragment } from 'react'
import { defaultProps, propTypes } from './ButtonsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ButtonsTemplate.MainContent'

export function ButtonsTemplate() {
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

ButtonsTemplate.defaultProps = defaultProps

ButtonsTemplate.propTypes = propTypes
