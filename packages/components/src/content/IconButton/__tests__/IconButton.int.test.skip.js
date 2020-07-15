import {
  renderDefault,
  renderWithAdditionalClassName,
  renderAsLink,
  renderAsPrimaryLinkType,
  renderAsPositiveLinkType,
  renderAsNegativeLinkType,
  renderAsSecondaryLinkType,
  renderAsMutedLinkType,
  renderWithDropdownIndicator,
  renderWithNoA11yIsues,
  renderWithNoA11yIsuesAsLink,
} from './IconButton.int.render'

describe('<Iconbutton />', () => {
  describe('Snaphot', () => {
    test('must match renderDefault()', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })

    test('must match renderWithAdditionalClassName()', () => {
      expect(global.renderToJSON(renderWithAdditionalClassName())).toMatchSnapshot()
    })

    test('must match renderAsLink()', () => {
      expect(global.renderToJSON(renderAsLink())).toMatchSnapshot()
    })

    test('must match renderAsPrimaryLinkType()', () => {
      expect(global.renderToJSON(renderAsPrimaryLinkType())).toMatchSnapshot()
    })

    test('must match renderAsPositiveLinkType()', () => {
      expect(global.renderToJSON(renderAsPositiveLinkType())).toMatchSnapshot()
    })

    test('must match renderAsNegativeLinkType()', () => {
      expect(global.renderToJSON(renderAsNegativeLinkType())).toMatchSnapshot()
    })

    test('must match renderAsSecondaryLinkType()', () => {
      expect(global.renderToJSON(renderAsSecondaryLinkType())).toMatchSnapshot()
    })

    test('must match renderAsMutedLinkType()', () => {
      expect(global.renderToJSON(renderAsMutedLinkType())).toMatchSnapshot()
    })

    test('must match renderWithDropdownIndicator()', () => {
      expect(global.renderToJSON(renderWithDropdownIndicator())).toMatchSnapshot()
    })

    test('must match renderWithNoA11yIsues()', () => {
      expect(global.renderToJSON(renderWithNoA11yIsues())).toMatchSnapshot()
    })

    test('must match renderWithNoA11yIsuesAsLink()', () => {
      expect(global.renderToJSON(renderWithNoA11yIsuesAsLink())).toMatchSnapshot()
    })
  })
})
