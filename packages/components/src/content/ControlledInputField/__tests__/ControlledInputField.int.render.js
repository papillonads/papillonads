const ControlledInputField =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.ControlledInputField
    : require('../../../../build').content.ControlledInputField

export function renderDefault() {
  return <ControlledInputField id="checkbox" labelText="fantastic-label-text" />
}

export function renderWithAdditionalClassName() {
  return <ControlledInputField className="fantastic-class-name" id="checkbox" labelText="fantastic-label-text" />
}

export function renderAsRequired() {
  return <ControlledInputField className="fantastic-class-name" id="checkbox" labelText="fantastic-label-text" required />
}

export function renderWithHelpText() {
  return <ControlledInputField className="fantastic-class-name" id="checkbox" labelText="fantastic-label-text" helpText="Help Text" />
}

export function renderWithValidationMessage() {
  return (
    <ControlledInputField className="fantastic-class-name" id="checkbox" labelText="fantastic-label-text" validationMessage="Not valid!" />
  )
}

export function renderAsDisabled() {
  return <ControlledInputField className="fantastic-class-name" id="checkbox" labelText="fantastic-label-text" disabled />
}

export function renderWithLightLabelVariation() {
  return (
    <ControlledInputField
      className="fantastic-class-name"
      id="checkbox"
      labelText="fantastic-label-text"
      validationMessage="Not valid!"
      labelIsLight
    />
  )
}

export function renderAsChecked() {
  return <ControlledInputField className="fantastic-class-name" id="checkbox" labelText="fantastic-label-text" checked />
}

export function renderWithValue() {
  return <ControlledInputField className="fantastic-class-name" id="checkbox" labelText="fantastic-label-text" value="fantastic-value" />
}

export function renderWithNoA11yIsues() {
  return <ControlledInputField id="checkbox" labelText="fantastic-label-text" />
}
