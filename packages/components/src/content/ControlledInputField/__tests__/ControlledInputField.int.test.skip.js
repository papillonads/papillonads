import {
  renderDefault,
  renderWithAdditionalClassName,
  renderAsRequired,
  renderWithHelpText,
  renderWithValidationMessage,
  renderAsDisabled,
  renderWithLightLabelVariation,
  renderAsChecked,
  renderWithValue,
  renderWithNoA11yIsues,
} from './ControlledInputField.int.render'

describe('<ControlledInputField />', () => {
  describe('Snaphot', () => {
    test('must match renderDefault', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })

    test('must match renderWithAdditionalClassName', () => {
      expect(global.renderToJSON(renderWithAdditionalClassName())).toMatchSnapshot()
    })

    test('must match renderAsRequired', () => {
      expect(global.renderToJSON(renderAsRequired())).toMatchSnapshot()
    })

    test('must match renderWithHelpText', () => {
      expect(global.renderToJSON(renderWithHelpText())).toMatchSnapshot()
    })

    test('must match renderWithValidationMessage', () => {
      expect(global.renderToJSON(renderWithValidationMessage())).toMatchSnapshot()
    })

    test('must match renderAsDisabled', () => {
      expect(global.renderToJSON(renderAsDisabled())).toMatchSnapshot()
    })

    test('must match renderWithLightLabelVariation', () => {
      expect(global.renderToJSON(renderWithLightLabelVariation())).toMatchSnapshot()
    })

    test('must match renderAsChecked(', () => {
      expect(global.renderToJSON(renderAsChecked())).toMatchSnapshot()
    })

    test('must match renderWithValue', () => {
      expect(global.renderToJSON(renderWithValue())).toMatchSnapshot()
    })

    test('must match renderWithNoA11yIsues', async () => {
      const html = global.renderMountHTML(renderWithNoA11yIsues())

      expect(await global.axe(html)).toHaveNoViolations()
    })
  })
})
