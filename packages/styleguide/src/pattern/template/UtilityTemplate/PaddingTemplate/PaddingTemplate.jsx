import { Fragment } from 'react'
import { defaultProps, propTypes } from './PaddingTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './PaddingTemplate.MainContent'

export function PaddingTemplate() {
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

PaddingTemplate.defaultProps = defaultProps

PaddingTemplate.propTypes = propTypes
