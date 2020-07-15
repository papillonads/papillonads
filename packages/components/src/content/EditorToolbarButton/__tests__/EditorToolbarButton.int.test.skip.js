import {
  renderDefault,
  renderWithAdditionalClassName,
  renderAsActive,
  renderAsDisabled,
  renderWithDropdownIndicator,
  renderWithNoA11yIsues,
} from './EditorToolbarButton.int.render'

describe('<EditorToolbarButton />', () => {
  describe('Snaphot', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })

    test('must match renderWithAdditionalClassName()', () => {
      expect(global.renderToJSON(renderWithAdditionalClassName())).toMatchSnapshot()
    })

    test('must match renderAsActive()', () => {
      expect(global.renderToJSON(renderAsActive())).toMatchSnapshot()
    })

    test('must match renderAsDisabled()', () => {
      expect(global.renderToJSON(renderAsDisabled())).toMatchSnapshot()
    })

    test('must match renderWithDropdownIndicator()', () => {
      expect(global.renderToJSON(renderWithDropdownIndicator())).toMatchSnapshot()
    })

    test('must match renderWithNoA11yIsues', async () => {
      const html = global.renderMountHTML(renderWithNoA11yIsues())

      expect(await global.axe(html)).toHaveNoViolations()
    })
  })
})
