import { text, boolean } from '@storybook/addon-knobs'

const RadioButton =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.RadioButton
    : require('../../../../build').content.RadioButton

export function renderDefault() {
  return (
    <RadioButton
      className={text('className', '')}
      id="Checkbox"
      checked={boolean('Checked', false)}
      labelText={(text('Aria label text'), 'some label text')}
      disabled={boolean('Disabled', false)}
      required={boolean('Required', false)}
      name={text('Name', 'some-name')}
      willBlurOnEsc={boolean('willBlurOnEsc', true)}
    />
  )
}

export function renderWithAdditionalClassName() {
  return <RadioButton labelText="radio" className="fantastic-class-name" />
}

export function renderWithNoA11yIsues() {
  return <RadioButton labelText="radio" />
}
