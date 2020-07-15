import React from 'react'
import { configure, addParameters, addDecorator } from '@storybook/react'
import utilityStyles from '../packages/css/src/primer/utilities/padding.scss'

// Storybook Addon Dependencies
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { jsxDecorator } from 'storybook-addon-jsx'

// Setup Addons
addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator(jsxDecorator)
addDecorator((story) => <div className={utilityStyles['p-4']}>{story()}</div>)

// Setup Storybook options
addParameters({ info: { header: false, source: false } })

addParameters({
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
  },
})

localStorage.clear()
