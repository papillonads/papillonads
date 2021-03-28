const ControlledInput =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.ControlledInput
    : require('../../../../build').content.ControlledInput

export function renderDefault() {
  return <ControlledInput id="ControlledInput" labelText="ControlledInput" />
}

export function renderWithAdditionalClassName() {
  return <ControlledInput className="fantastic-class-name" id="ControlledInput" labelText="ControlledInput" />
}

export function renderAsRequired() {
  return <ControlledInput className="fantastic-class-name" id="ControlledInput" labelText="ControlledInput" required />
}

export function renderAsDisabled() {
  return <ControlledInput className="fantastic-class-name" id="ControlledInput" labelText="ControlledInput" disabled />
}

export function renderAsChecked() {
  return <ControlledInput className="fantastic-class-name" id="ControlledInput" labelText="ControlledInput" checked />
}

export function renderWithValue() {
  return <ControlledInput className="fantastic-class-name" id="ControlledInput" labelText="ControlledInput" value="fantastic-value" />
}

export function renderWithNoA11yIsues() {
  return <ControlledInput id="ControlledInput" labelText="ControlledInput" />
}
