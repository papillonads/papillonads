import { text } from '@storybook/addon-knobs'

const TabFocusTrap =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.TabFocusTrap
    : require('../../../../build').content.TabFocusTrap

export function renderDefault() {
  return <TabFocusTrap className={text('className', '')} />
}
