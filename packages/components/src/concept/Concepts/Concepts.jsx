/* eslint-disable react/no-danger */
import React from 'react'
import { stripDocument } from './Concepts.part'
import { version } from '../../../../../lerna.json'

export function Concepts() {
  return (
    <React.Fragment>
      <h1>
        {' '}
        <span role="img" aria-label="emoji">
          🚀
        </span>{' '}
        v{version}{' '}
        <span role="img" aria-label="emoji">
          🕺
        </span>
      </h1>
      <div dangerouslySetInnerHTML={{ __html: stripDocument() }} />
    </React.Fragment>
  )
}
/* eslint-enable react/no-danger */
