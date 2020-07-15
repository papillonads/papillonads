import {
  buttonItems,
  anchorItems,
  renderCustom,
  renderDefault,
  renderWithActions,
  renderRightAligned,
  renderRightAlignedWithActions,
  renderWithIcons,
  renderFullContainer,
} from './UnderlineNav.int.render'
import { underlineNavItemType } from '../UnderlineNav.prop'

jest.mock('@papillonads/library', () => {
  return {
    hooks: {
      react: {
        useState: () => {},
        useRef: () => {},
      },
    },
    array: {
      getIndexItems: () => {},
      getIndexItemsWithSelected: () => {},
    },
  }
})

const libraryMockObject = require('@papillonads/library')

describe('<UnderlineNav />', () => {
  let indexButtonItemsDataObject = [
    { ...buttonItems[0], index: 0 },
    { ...buttonItems[1], index: 1 },
    { ...buttonItems[2], index: 2 },
    { ...buttonItems[3], index: 3 },
  ]

  let indexAnchorItemsDataObject = [
    { ...anchorItems[0], index: 0 },
    { ...anchorItems[1], index: 1 },
    { ...anchorItems[2], index: 2 },
    { ...anchorItems[3], index: 3 },
  ]

  const newIndexButtonItemsWithSelectedDataObject = [
    { ...buttonItems[0], index: 0, isSelected: true },
    { ...buttonItems[1], index: 1, isSelected: false },
    { ...buttonItems[2], index: 2, isSelected: false },
    { ...buttonItems[3], index: 3, isSelected: false },
  ]

  const newIndexAnchorItemsWithSelectedDataObject = [
    { ...anchorItems[0], index: 0, isSelected: true },
    { ...anchorItems[1], index: 1, isSelected: false },
    { ...anchorItems[2], index: 2, isSelected: false },
    { ...anchorItems[3], index: 3, isSelected: false },
  ]

  const onClickMockFn = jest.fn()

  const setIndexButtonItemsMockFn = jest.fn((indexButtonItems) => {
    indexButtonItemsDataObject = indexButtonItems
  })

  const setIndexAnchorItemsMockFn = jest.fn((indexAnchorItems) => {
    indexAnchorItemsDataObject = indexAnchorItems
  })

  function mockLibraryForButtonItems() {
    jest.spyOn(libraryMockObject.hooks.react, 'useState').mockImplementation(() => {
      return [indexButtonItemsDataObject, setIndexButtonItemsMockFn]
    })

    jest.spyOn(libraryMockObject.array, 'getIndexItems').mockReturnValue(indexButtonItemsDataObject)

    jest.spyOn(libraryMockObject.array, 'getIndexItemsWithSelected').mockReturnValue(newIndexButtonItemsWithSelectedDataObject)
  }

  function mockLibraryForAnchorItems() {
    jest.spyOn(libraryMockObject.hooks.react, 'useState').mockImplementation(() => {
      return [indexAnchorItemsDataObject, setIndexAnchorItemsMockFn]
    })

    jest.spyOn(libraryMockObject.array, 'getIndexItems').mockReturnValue(indexAnchorItemsDataObject)

    jest.spyOn(libraryMockObject.array, 'getIndexItemsWithSelected').mockReturnValue(newIndexAnchorItemsWithSelectedDataObject)
  }

  describe('Event', () => {
    test('must return new items without index when button items and onClick()', () => {
      mockLibraryForButtonItems()
      const mountCustomRender = global.renderMount(renderCustom(buttonItems, underlineNavItemType.button, onClickMockFn))
      mountCustomRender.find('button').first().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      expect(mountCustomRender.props().onClick).toHaveBeenCalledWith(newIndexButtonItemsWithSelectedDataObject)
    })

    test('must return new items without index when anchor items and onClick()', () => {
      mockLibraryForAnchorItems()
      const mountCustomRender = global.renderMount(renderCustom(anchorItems, underlineNavItemType.a, onClickMockFn))
      mountCustomRender.find('a').first().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      expect(mountCustomRender.props().onClick).toHaveBeenCalledWith(newIndexAnchorItemsWithSelectedDataObject)
    })
  })

  describe('Render', () => {
    test('must match renderDefault()', () => {
      mockLibraryForButtonItems()
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })

    test('must match renderWithActions()', () => {
      mockLibraryForButtonItems()
      expect(global.renderToJSON(renderWithActions())).toMatchSnapshot()
    })

    test('must match renderRightAligned()', () => {
      mockLibraryForButtonItems()
      expect(global.renderToJSON(renderRightAligned())).toMatchSnapshot()
    })

    test('must match renderRightAlignedWithActions()', () => {
      mockLibraryForButtonItems()
      expect(global.renderToJSON(renderRightAlignedWithActions())).toMatchSnapshot()
    })

    test('must match renderWithIcons()', () => {
      mockLibraryForButtonItems()
      expect(global.renderToJSON(renderWithIcons())).toMatchSnapshot()
    })

    test('must match renderFullContainer()', () => {
      mockLibraryForButtonItems()
      expect(global.renderToJSON(renderFullContainer())).toMatchSnapshot()
    })
  })

  describe('State', () => {
    test('must reset new items with index when button items and onClick()', () => {
      mockLibraryForButtonItems()
      const mountCustomRender = global.renderMount(renderCustom(buttonItems, underlineNavItemType.button, onClickMockFn))
      mountCustomRender.find('button').first().simulate('click')
      expect(setIndexButtonItemsMockFn).toHaveBeenCalledWith(newIndexButtonItemsWithSelectedDataObject)
      expect(indexButtonItemsDataObject).toBe(newIndexButtonItemsWithSelectedDataObject)
    })

    test('must reset new items with index when anchor items and onClick()', () => {
      mockLibraryForAnchorItems()
      const mountCustomRender = global.renderMount(renderCustom(anchorItems, underlineNavItemType.a, onClickMockFn))
      mountCustomRender.find('a').first().simulate('click')
      expect(setIndexAnchorItemsMockFn).toHaveBeenCalledWith(newIndexAnchorItemsWithSelectedDataObject)
      expect(indexAnchorItemsDataObject).toBe(newIndexAnchorItemsWithSelectedDataObject)
    })
  })
})
