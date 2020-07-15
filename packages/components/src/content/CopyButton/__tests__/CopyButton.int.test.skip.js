import { renderDefault, renderWithAdditionalClassName, renderWithCopyValue, renderWithNoA11yIsues } from './CopyButton.int.render'

describe('<CopyButton />', () => {
  describe('Snaphot', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })

    test('must match renderWithAdditionalClassName()', () => {
      expect(global.renderToJSON(renderWithAdditionalClassName())).toMatchSnapshot()
    })

    test('must match renderWithCopyValue()', () => {
      expect(global.renderToJSON(renderWithCopyValue())).toMatchSnapshot()
    })

    test('must match renderWithNoA11yIsues()', async () => {
      const html = global.renderMountHTML(renderWithNoA11yIsues())

      expect(await global.axe(html)).toHaveNoViolations()
    })
  })
})
