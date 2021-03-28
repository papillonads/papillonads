import { Fragment } from 'react'
import { defaultProps, propTypes } from './BlankslateTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './BlankslateTemplate.MainContent'

export function BlankslateTemplate() {
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

BlankslateTemplate.defaultProps = defaultProps

BlankslateTemplate.propTypes = propTypes
