import React from 'react'
import { AsyncNotFoundPage } from '../AsyncNotFoundPage'
import { NotFoundPage } from '../NotFoundPage'

const props = {
  location: {
    pathname: 'fantastic-path-name',
  },
}

export const asyncRender = <AsyncNotFoundPage location={props.location} />
export const defaultRender = <NotFoundPage location={props.location} />
