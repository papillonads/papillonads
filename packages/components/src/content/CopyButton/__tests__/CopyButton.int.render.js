import { text, select } from '@storybook/addon-knobs'

const CopyButton =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.CopyButton
    : require('../../../../build').content.CopyButton

export function renderDefault() {
  return (
    <div>
      <CopyButton
        className={text('className', '')}
        copyValue={text('copyValue', 'fantastic-copy-value')}
        tooltipPlace={select(
          'place',
          {
            Top: 'top',
            Bottom: 'bottom',
            Left: 'left',
            Right: 'right',
          },
          'bottom',
        )}
        tooltipText={text('tooltipText', 'Copy to clipboard')}
        tooltipCopiedText={text('tooltipText', 'Copied!')}
      />
    </div>
  )
}

export function renderWithAdditionalClassName() {
  return <CopyButton className="fantastic-class-name" />
}

export function renderWithCopyValue() {
  return <CopyButton copyValue="fantastic-copy-value" />
}

export function renderWithNoA11yIsues() {
  return <CopyButton />
}
