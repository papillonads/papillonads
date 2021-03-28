import { action } from '@storybook/addon-actions'
import { select, text, boolean } from '@storybook/addon-knobs'
import { iconName } from '../../Icon/Icon.prop'

const EditorToolbarButton =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.EditorToolbarButton
    : require('../../../../build').content.EditorToolbarButton

export function renderDefault() {
  return (
    <EditorToolbarButton
      icon={select('icon', Object.keys(iconName), Object.keys(iconName)[0])}
      tooltip={text('tooltip', 'Insert a H1 tag')}
      label={text('label (screenreader only)', 'H1')}
      isActive={boolean('isActive', false)}
      disabled={boolean('disabled', false)}
      withDropdown={boolean('withDropdown', false)}
      onClick={action('onClick')}
    />
  )
}

export function renderWithAdditionalClassName() {
  return <EditorToolbarButton icon="HeadingOne" label="H1" className="my-extra-class" />
}

export function renderAsActive() {
  return <EditorToolbarButton icon="HeadingOne" label="H1" tooltip="H1" isActive />
}

export function renderAsDisabled() {
  return <EditorToolbarButton icon="HeadingOne" label="H1" tooltip="H1" disabled />
}

export function renderWithDropdownIndicator() {
  return <EditorToolbarButton icon="HeadingOne" label="H1" tooltip="H1" withDropdown />
}

export function renderWithNoA11yIsues() {
  return <EditorToolbarButton icon="HeadingOne" label="H1" />
}
