import { Fragment } from 'react'
import { defaultProps, propTypes } from './BranchNameTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './BranchNameTemplate.MainContent'

export function BranchNameTemplate() {
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

BranchNameTemplate.defaultProps = defaultProps

BranchNameTemplate.propTypes = propTypes
