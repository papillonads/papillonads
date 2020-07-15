import {
  renderCustom,
  renderDefaultButton,
  renderDefaultSmallButton,
  renderDefaultLargeButton,
  renderDefaultDisabledButton,
  renderDefaultIconButtonLeftAligned,
  renderDefaultIconButtonRightAligned,
  renderDefaultLinkButton,
  renderPrimaryButton,
  renderPrimarySmallButton,
  renderPrimaryLargeButton,
  renderPrimaryDisabledButton,
  renderPrimaryIconButtonLeftAligned,
  renderPrimaryIconButtonRightAligned,
  renderDangerButton,
  renderDangerSmallButton,
  renderDangerLargeButton,
  renderDangerDisabledButton,
  renderDangerIconButtonLeftAligned,
  renderDangerIconButtonRightAligned,
  renderOutlineButton,
  renderOutlineSmallButton,
  renderOutlineLargeButton,
  renderOutlineDisabledButton,
  renderOutlineIconButtonLeftAligned,
  renderOutlineIconButtonRightAligned,
  renderBlueButton,
  renderBlueSmallButton,
  renderBlueLargeButton,
  renderBlueDisabledButton,
  renderBlueIconButtonLeftAligned,
  renderBlueIconButtonRightAligned,
  renderOrangeButton,
  renderOrangeSmallButton,
  renderOrangeLargeButton,
  renderOrangeDisabledButton,
  renderOrangeIconButtonLeftAligned,
  renderOrangeIconButtonRightAligned,
} from './Button.int.render'
import { buttonElement } from '../Button.prop'

describe('<Button />', () => {
  const onClickMockFn = jest.fn()

  describe('Event', () => {
    test('must call onClick() when element button', () => {
      const mountCustomRender = global.renderMount(renderCustom(buttonElement.button, onClickMockFn))
      mountCustomRender.find('button').first().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      expect(mountCustomRender.props().onClick).toHaveBeenCalled()
    })

    test('must call onClick() when element a', () => {
      const mountCustomRender = global.renderMount(renderCustom(buttonElement.a, onClickMockFn))
      mountCustomRender.find('a').first().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      expect(mountCustomRender.props().onClick).toHaveBeenCalled()
    })
  })

  describe('Render', () => {
    test('must match renderDefaultButton()', () => {
      expect(global.renderToJSON(renderDefaultButton())).toMatchSnapshot()
    })

    test('must match renderDefaultSmallButton()', () => {
      expect(global.renderToJSON(renderDefaultSmallButton())).toMatchSnapshot()
    })

    test('must match renderDefaultLargeButton()', () => {
      expect(global.renderToJSON(renderDefaultLargeButton())).toMatchSnapshot()
    })

    test('must match renderDefaultDisabledButton()', () => {
      expect(global.renderToJSON(renderDefaultDisabledButton())).toMatchSnapshot()
    })

    test('must match renderDefaultIconButtonLeftAligned()', () => {
      expect(global.renderToJSON(renderDefaultIconButtonLeftAligned())).toMatchSnapshot()
    })

    test('must match renderDefaultIconButtonRightAligned()', () => {
      expect(global.renderToJSON(renderDefaultIconButtonRightAligned())).toMatchSnapshot()
    })

    test('must match renderDefaultLinkButton()', () => {
      expect(global.renderToJSON(renderDefaultLinkButton())).toMatchSnapshot()
    })

    test('must match renderPrimaryButton()', () => {
      expect(global.renderToJSON(renderPrimaryButton())).toMatchSnapshot()
    })

    test('must match renderPrimarySmallButton()', () => {
      expect(global.renderToJSON(renderPrimarySmallButton())).toMatchSnapshot()
    })

    test('must match renderPrimaryLargeButton()', () => {
      expect(global.renderToJSON(renderPrimaryLargeButton())).toMatchSnapshot()
    })

    test('must match renderPrimaryDisabledButton()', () => {
      expect(global.renderToJSON(renderPrimaryDisabledButton())).toMatchSnapshot()
    })

    test('must match renderPrimaryIconButtonLeftAligned()', () => {
      expect(global.renderToJSON(renderPrimaryIconButtonLeftAligned())).toMatchSnapshot()
    })

    test('must match renderPrimaryIconButtonRightAligned()', () => {
      expect(global.renderToJSON(renderPrimaryIconButtonRightAligned())).toMatchSnapshot()
    })

    test('must match renderDangerButton()', () => {
      expect(global.renderToJSON(renderDangerButton())).toMatchSnapshot()
    })

    test('must match renderDangerSmallButton()', () => {
      expect(global.renderToJSON(renderDangerSmallButton())).toMatchSnapshot()
    })

    test('must match renderDangerLargeButton()', () => {
      expect(global.renderToJSON(renderDangerLargeButton())).toMatchSnapshot()
    })

    test('must match renderDangerDisabledButton()', () => {
      expect(global.renderToJSON(renderDangerDisabledButton())).toMatchSnapshot()
    })

    test('must match renderDangerIconButtonLeftAligned()', () => {
      expect(global.renderToJSON(renderDangerIconButtonLeftAligned())).toMatchSnapshot()
    })

    test('must match renderDangerIconButtonRightAligned()', () => {
      expect(global.renderToJSON(renderDangerIconButtonRightAligned())).toMatchSnapshot()
    })

    test('must match renderOutlineButton()', () => {
      expect(global.renderToJSON(renderOutlineButton())).toMatchSnapshot()
    })

    test('must match renderOutlineSmallButton()', () => {
      expect(global.renderToJSON(renderOutlineSmallButton())).toMatchSnapshot()
    })

    test('must match renderOutlineLargeButton()', () => {
      expect(global.renderToJSON(renderOutlineLargeButton())).toMatchSnapshot()
    })

    test('must match renderOutlineDisabledButton()', () => {
      expect(global.renderToJSON(renderOutlineDisabledButton())).toMatchSnapshot()
    })

    test('must match renderOutlineIconButtonLeftAligned()', () => {
      expect(global.renderToJSON(renderOutlineIconButtonLeftAligned())).toMatchSnapshot()
    })

    test('must match renderOutlineIconButtonRightAligned()', () => {
      expect(global.renderToJSON(renderOutlineIconButtonRightAligned())).toMatchSnapshot()
    })

    test('must match renderBlueButton()', () => {
      expect(global.renderToJSON(renderBlueButton())).toMatchSnapshot()
    })

    test('must match renderBlueSmallButton()', () => {
      expect(global.renderToJSON(renderBlueSmallButton())).toMatchSnapshot()
    })

    test('must match renderBlueLargeButton()', () => {
      expect(global.renderToJSON(renderBlueLargeButton())).toMatchSnapshot()
    })

    test('must match renderBlueDisabledButton()', () => {
      expect(global.renderToJSON(renderBlueDisabledButton())).toMatchSnapshot()
    })

    test('must match renderBlueIconButtonLeftAligned()', () => {
      expect(global.renderToJSON(renderBlueIconButtonLeftAligned())).toMatchSnapshot()
    })

    test('must match renderBlueIconButtonRightAligned()', () => {
      expect(global.renderToJSON(renderBlueIconButtonRightAligned())).toMatchSnapshot()
    })

    test('must match renderOrangeButton()', () => {
      expect(global.renderToJSON(renderOrangeButton())).toMatchSnapshot()
    })

    test('must match renderOrangeSmallButton()', () => {
      expect(global.renderToJSON(renderOrangeSmallButton())).toMatchSnapshot()
    })

    test('must match renderOrangeLargeButton()', () => {
      expect(global.renderToJSON(renderOrangeLargeButton())).toMatchSnapshot()
    })

    test('must match renderOrangeDisabledButton()', () => {
      expect(global.renderToJSON(renderOrangeDisabledButton())).toMatchSnapshot()
    })

    test('must match renderOrangeIconButtonLeftAligned()', () => {
      expect(global.renderToJSON(renderOrangeIconButtonLeftAligned())).toMatchSnapshot()
    })

    test('must match renderOrangeIconButtonRightAligned()', () => {
      expect(global.renderToJSON(renderOrangeIconButtonRightAligned())).toMatchSnapshot()
    })
  })
})
