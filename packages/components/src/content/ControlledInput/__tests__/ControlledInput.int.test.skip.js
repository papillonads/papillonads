import {
  renderDefault,
  renderWithAdditionalClassName,
  renderAsRequired,
  renderAsDisabled,
  renderAsChecked,
  renderWithValue,
  renderWithNoA11yIsues,
} from './ControlledInput.int.render'

describe('<ControlledInput />', () => {
  describe('Snaphot', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })

    test('must match renderWithAdditionalClassName()', () => {
      expect(global.renderToJSON(renderWithAdditionalClassName())).toMatchSnapshot()
    })

    test('must match renderAsRequired()', () => {
      expect(global.renderToJSON(renderAsRequired())).toMatchSnapshot()
    })

    test('must match renderAsDisabled()', () => {
      expect(global.renderToJSON(renderAsDisabled())).toMatchSnapshot()
    })

    test('must match renderAsChecked()', () => {
      expect(global.renderToJSON(renderAsChecked())).toMatchSnapshot()
    })

    test('must match renderWithValue()', () => {
      expect(global.renderToJSON(renderWithValue())).toMatchSnapshot()
    })

    test('must match renderWithNoA11yIsues()', async () => {
      const html = global.renderMountHTML(renderWithNoA11yIsues())

      expect(await global.axe(html)).toHaveNoViolations()
    })
  })
})
