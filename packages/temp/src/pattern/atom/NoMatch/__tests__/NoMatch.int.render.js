/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { NoMatch } from '../NoMatch'

const props = {
  location: {
    pathname: 'fantastic-path-name',
  },
}

export const defaultRender = <NoMatch {...props} />
/* eslint-enable react/jsx-props-no-spreading */
