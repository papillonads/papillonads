import { Fragment } from 'react'
import { defaultProps, propTypes } from './BoxShadowTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './BoxShadowTemplate.MainContent'

export function BoxShadowTemplate() {
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

BoxShadowTemplate.defaultProps = defaultProps

BoxShadowTemplate.propTypes = propTypes
