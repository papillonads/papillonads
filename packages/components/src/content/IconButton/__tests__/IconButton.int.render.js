import { select, text, boolean } from '@storybook/addon-knobs'
import { iconName } from '../../Icon/Icon.prop'

const IconButton =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.IconButton
    : require('../../../../build').content.IconButton

export function renderDefault() {
  return (
    <IconButton
      iconProps={{
        icon: select('icon', Object.keys(iconName), Object.keys(iconName)[0]),
      }}
      buttonType={select('buttonType', ['primary', 'positive', 'negative', 'secondary', 'muted', 'white'])}
      label={text('label (screenreader only)', 'Add New Element')}
      disabled={boolean('disabled', false)}
      withDropdown={boolean('withDropdown', false)}
      className={text('className', '')}
    />
  )
}

export function renderWithAdditionalClassName() {
  return (
    <IconButton iconProps={{ icon: 'ArrowDown' }} label="My Icon" className="my-extra-class">
      IconButton
    </IconButton>
  )
}

export function renderAsLink() {
  return <IconButton href="#" iconProps={{ icon: 'ArrowDown' }} label="My Icon" />
}

export function renderAsPrimaryLinkType() {
  return <IconButton iconProps={{ icon: 'ArrowDown' }} label="My Icon" buttonType="primary" />
}

export function renderAsPositiveLinkType() {
  return <IconButton iconProps={{ icon: 'ArrowDown' }} label="My Icon" buttonType="positive" />
}

export function renderAsNegativeLinkType() {
  return <IconButton iconProps={{ icon: 'ArrowDown' }} label="My Icon" buttonType="negative" />
}

export function renderAsSecondaryLinkType() {
  return <IconButton iconProps={{ icon: 'ArrowDown' }} label="My Icon" buttonType="secondary" />
}

export function renderAsMutedLinkType() {
  return <IconButton iconProps={{ icon: 'ArrowDown' }} label="My Icon" buttonType="muted" />
}

export function renderWithDropdownIndicator() {
  return <IconButton iconProps={{ icon: 'ArrowDown' }} label="My Icon" withDropdown />
}

export function renderWithNoA11yIsues() {
  return <IconButton iconProps={{ icon: 'ArrowDown' }} label="My Icon" />
}

export function renderWithNoA11yIsuesAsLink() {
  return <IconButton iconProps={{ icon: 'ArrowDown' }} label="My Icon" href="#" />
}
