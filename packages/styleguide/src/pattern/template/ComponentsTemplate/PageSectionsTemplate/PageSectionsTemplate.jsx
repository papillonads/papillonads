import React from 'react'
import { defaultProps, propTypes } from './PageSectionsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { FlashAlert } from '../../../molecule/FlashAlert'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './PageSectionsTemplate.MainContent'

export function PageSectionsTemplate() {
  return (
    <React.Fragment>
      <Navigation />
      <FlashAlert />
      <div className="d-flex flex-wrap flex-lg-nowrap">
        <MainContent />
        <SideBar />
      </div>
    </React.Fragment>
  )
}

PageSectionsTemplate.defaultProps = defaultProps

PageSectionsTemplate.propTypes = propTypes
