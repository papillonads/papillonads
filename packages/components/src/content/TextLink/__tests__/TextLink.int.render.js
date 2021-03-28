import { text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { iconName } from '../../Icon/Icon.prop'

const TextLink =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.TextLink
    : require('../../../../build').content.TextLink

export function renderDefault() {
  return (
    <TextLink
      href={text('href', '')}
      onClick={action('onClick')}
      linkType={select(
        'linkType',
        {
          'Primary (default)': 'primary',
          Positive: 'positive',
          Negative: 'negative',
          Secondary: 'secondary',
          Muted: 'muted',
        },
        'primary',
      )}
      disabled={boolean('disabled', false)}
      className={text('className', '')}
      iconPosition={select(
        'iconPosition',
        {
          'left (default)': 'left',
          right: 'right',
        },
        'left',
      )}
      icon={select('icon', ['', ...Object.keys(iconName)], undefined)}
    >
      {text('children', 'Text Link Label')}
    </TextLink>
  )
}

export function renderWithAdditionalClassName() {
  return <TextLink className="fantastic-class-name">Text Link</TextLink>
}

export function renderAsButton() {
  return <TextLink>Text Link</TextLink>
}

export function renderAsLink() {
  return <TextLink href="#">Text Link</TextLink>
}

export function renderAsPrimaryLinkType() {
  return <TextLink linkType="primary">Text Link</TextLink>
}

export function renderAsPositiveLinkType() {
  return <TextLink linkType="positive">Text Link</TextLink>
}

export function renderAsNegativeLinkType() {
  return <TextLink linkType="negative">Text Link</TextLink>
}

export function renderAsSecondaryLinkType() {
  return <TextLink linkType="secondary">Text Link</TextLink>
}

export function renderAsMutedLinkType() {
  return <TextLink linkType="muted">Text Link</TextLink>
}

export function renderCallOnClick(onClick) {
  return <TextLink onClick={onClick}>Text Link</TextLink>
}

export function renderPreventOnClick(onClick) {
  return (
    <TextLink disabled onClick={onClick}>
      Text Link
    </TextLink>
  )
}

export function renderAllowNotConsumedAdditionalProps() {
  return <TextLink some-prop="fantastic-prop">Text Link</TextLink>
}

export function renderWithLeftIcon() {
  return <TextLink icon={iconName[Object.keys(iconName)[0]]}>Text Link</TextLink>
}

export function renderWithRightIcon() {
  return (
    <TextLink iconPosition="right" icon={iconName[Object.keys(iconName)[0]]}>
      Text Link
    </TextLink>
  )
}

export function renderWithNoA11yIsuesAsButton() {
  return <TextLink>Text Link</TextLink>
}

export function renderWithNoA11yIsuesAsLink() {
  return <TextLink href="#">Text Link</TextLink>
}
