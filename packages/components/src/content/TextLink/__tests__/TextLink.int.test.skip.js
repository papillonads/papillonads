import {
  renderDefault,
  renderWithAdditionalClassName,
  renderAsButton,
  renderAsLink,
  renderAsPrimaryLinkType,
  renderAsPositiveLinkType,
  renderAsNegativeLinkType,
  renderAsSecondaryLinkType,
  renderAsMutedLinkType,
  renderCallOnClick,
  renderPreventOnClick,
  renderAllowNotConsumedAdditionalProps,
  renderWithLeftIcon,
  renderWithRightIcon,
  renderWithNoA11yIsuesAsButton,
  renderWithNoA11yIsuesAsLink,
} from './TextLink.int.render'

describe('<TextLink />', () => {
  const onClickMockFn = jest.fn()

  afterEach(() => jest.clearAllMocks())

  describe('Snaphot', () => {
    test('must match renderDefault', () => {
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })

    test('must match renderWithAdditionalClassName', () => {
      expect(global.renderToJSON(renderWithAdditionalClassName())).toMatchSnapshot()
    })

    test('must match renderAsButton', () => {
      expect(global.renderToJSON(renderAsButton())).toMatchSnapshot()
    })

    test('must match renderAsLink', () => {
      expect(global.renderToJSON(renderAsLink())).toMatchSnapshot()
    })

    test('must match renderAsPrimaryLinkType', () => {
      expect(global.renderToJSON(renderAsPrimaryLinkType())).toMatchSnapshot()
    })

    test('must match renderAsPositiveLinkType', () => {
      expect(global.renderToJSON(renderAsPositiveLinkType())).toMatchSnapshot()
    })

    test('must match renderAsNegativeLinkType', () => {
      expect(global.renderToJSON(renderAsNegativeLinkType())).toMatchSnapshot()
    })

    test('must match renderAsSecondaryLinkType', () => {
      expect(global.renderToJSON(renderAsSecondaryLinkType())).toMatchSnapshot()
    })

    test('must match renderAsMutedLinkType', () => {
      expect(global.renderToJSON(renderAsMutedLinkType())).toMatchSnapshot()
    })

    test('must match renderAllowNotConsumedAdditionalProps', () => {
      expect(global.renderToJSON(renderAllowNotConsumedAdditionalProps())).toMatchSnapshot()
    })

    test('must match renderWithLeftIcon', () => {
      expect(global.renderToJSON(renderWithLeftIcon())).toMatchSnapshot()
    })

    test('must match renderWithRightIcon', () => {
      expect(global.renderToJSON(renderWithRightIcon())).toMatchSnapshot()
    })

    test('must match renderWithNoA11yIsuesAsButton', async () => {
      const html = global.renderMountHTML(renderWithNoA11yIsuesAsButton())

      expect(await global.axe(html)).toHaveNoViolations()
    })

    test('must match renderWithNoA11yIsuesAsLink', async () => {
      const html = global.renderMountHTML(renderWithNoA11yIsuesAsLink())

      expect(await global.axe(html)).toHaveNoViolations()
    })
  })

  describe('UX', () => {
    test('must call onClick()', () => {
      const output = global.renderShallow(renderCallOnClick(onClickMockFn))

      output.simulate('click')

      expect(output).toMatchSnapshot()
      expect(onClickMockFn).toHaveBeenCalled()
    })

    test('must not call onClick() when disabled', () => {
      const output = global.renderShallow(renderPreventOnClick(onClickMockFn))

      output.simulate('click')

      expect(output).toMatchSnapshot()
      expect(onClickMockFn).not.toHaveBeenCalled()
    })
  })
})
