import {
  renderDefault,
  renderWithAdditionalClassName,
  renderWithPDFType,
  renderWithImageType,
  renderWithArchivedStatus,
  renderWithNoA11yIsues,
} from './Asset.int.render'

describe('<Asset />', () => {
  describe('Snaphot', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })

    test('must match renderWithAdditionalClassName()', () => {
      expect(global.renderToJSON(renderWithAdditionalClassName())).toMatchSnapshot()
    })

    test('must match renderWithPDFType()', () => {
      expect(global.renderToJSON(renderWithPDFType())).toMatchSnapshot()
    })

    test('must match renderWithImageType()', () => {
      expect(global.renderToJSON(renderWithImageType())).toMatchSnapshot()
    })

    test('must match renderWithArchivedStatus()', () => {
      expect(global.renderToJSON(renderWithArchivedStatus())).toMatchSnapshot()
    })

    test('must match renderWithNoA11yIsues', async () => {
      const html = global.renderMountHTML(renderWithNoA11yIsues())

      expect(await global.axe(html)).toHaveNoViolations()
    })
  })
})
