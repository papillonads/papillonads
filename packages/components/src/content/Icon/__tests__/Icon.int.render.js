import { text, select } from '@storybook/addon-knobs'
import { iconName } from '../Icon.prop'

const Icon =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.Icon
    : require('../../../../build').content.Icon

export function renderDefault() {
  return (
    <Icon
      icon={select('icon', Object.keys(iconName), Object.keys(iconName)[0])}
      size={select(
        'size',
        {
          'Small (default)': 'small',
          Large: 'large',
        },
        'small',
      )}
      color={select(
        'color',
        {
          'Primary (default)': 'primary',
          Positive: 'positive',
          Negative: 'negative',
          Warning: 'warning',
          Secondary: 'secondary',
          Muted: 'muted',
          White: 'white',
        },
        'primary',
      )}
      className={text('className', '')}
    />
  )
}

export function renderAllIcons() {
  return (
    <div
      style={{
        columns: '3',
        width: '800px',
      }}
    >
      {Object.keys(iconName)
        .filter((icon) => !icon.toLowerCase().includes('trimmed'))
        .map((icon) => (
          <div key={icon} style={{ padding: '4px', fontSize: '14px', lineHeight: '21px' }}>
            <Icon icon={icon} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
            <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>{icon}</span>
          </div>
        ))}
    </div>
  )
}
