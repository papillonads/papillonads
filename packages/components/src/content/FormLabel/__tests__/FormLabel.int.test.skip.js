import {
  renderDefault,
  renderWithAdditionalClassName,
  renderAsRequired,
  renderWithRequiredText,
  renderWithNoA11yIsues,
} from './FormLabel.int.render'

describe('<FormLabel />', () => {
  describe('Snaphot', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })

    test('must match renderWithAdditionalClassName()', () => {
      expect(global.renderToJSON(renderWithAdditionalClassName())).toMatchSnapshot()
    })

    test('must match renderAsRequired', () => {
      expect(global.renderToJSON(renderAsRequired())).toMatchSnapshot()
    })

    test('must match renderWithRequiredText', () => {
      expect(global.renderToJSON(renderWithRequiredText())).toMatchSnapshot()
    })

    test('must match renderWithNoA11yIsues', async () => {
      const html = global.renderMountHTML(renderWithNoA11yIsues())

      expect(await global.axe(html)).toHaveNoViolations()
    })
  })
})
