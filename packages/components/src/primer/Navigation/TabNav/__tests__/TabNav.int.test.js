import {
  ariaAttr,
  defaultItems as items,
  navigationItems,
  renderCustom,
  renderDefault,
  renderWithButtonActions,
  renderWithTextActions,
  renderWithLinkActions,
  renderWithNavigation,
} from './TabNav.int.render'

jest.mock('@papillonads/library', () => {
  return {
    array: {
      getIndexItems: () => {},
      getIndexItemsWithSelected: () => {},
    },
  }
})

const libraryMockObject = require('@papillonads/library')

describe('<TabNav />', () => {
  const indexItemsDataObject = [
    { ...items[0], index: 0 },
    { ...items[1], index: 1 },
  ]

  const indexNavigationItemsDataObject = [
    { ...navigationItems[0], index: 0 },
    { ...navigationItems[1], index: 1 },
  ]

  const newIndexItemsWithSelectedDataObject = [
    { ...items[0], index: 0, isSelected: true },
    { ...items[1], index: 1, isSelected: false },
  ]

  const newIndexNavigationItemsWithSelectedDataObject = [
    { ...navigationItems[0], index: 0, isSelected: true },
    { ...navigationItems[1], index: 1, isSelected: false },
  ]

  const newItemsDataObject = [
    { ...items[0], isSelected: true },
    { ...items[1], isSelected: false },
  ]

  const newNavigationItemsDataObject = [
    { ...navigationItems[0], isSelected: true },
    { ...navigationItems[1], isSelected: false },
  ]

  const onClickMockFn = jest.fn()

  function mockLibraryForRegularItems() {
    jest.spyOn(libraryMockObject.array, 'getIndexItems').mockReturnValue(indexItemsDataObject)

    jest.spyOn(libraryMockObject.array, 'getIndexItemsWithSelected').mockReturnValue(newIndexItemsWithSelectedDataObject)
  }

  function mockLibraryForNavigationItems() {
    jest.spyOn(libraryMockObject.array, 'getIndexItems').mockReturnValue(indexNavigationItemsDataObject)

    jest.spyOn(libraryMockObject.array, 'getIndexItemsWithSelected').mockReturnValue(newIndexNavigationItemsWithSelectedDataObject)
  }

  afterEach(() => jest.clearAllMocks())

  describe('Event', () => {
    test('must return new items without index when regular items and onClick()', () => {
      mockLibraryForRegularItems()
      const mountCustomRender = global.renderMount(renderCustom(items, onClickMockFn)).find('TabNav')
      mountCustomRender.find('nav').first().find('a').first().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      expect(mountCustomRender.props().onClick).toHaveBeenCalledWith({
        ariaAttr,
        items: newItemsDataObject,
      })
    })

    test('must return new items without index when navigation items and onClick()', () => {
      mockLibraryForNavigationItems()
      const mountCustomRender = global.renderMount(renderCustom(navigationItems, onClickMockFn)).find('TabNav')
      mountCustomRender.find('nav').first().find('a').first().simulate('click')
      expect(mountCustomRender.props().onClick).toBe(onClickMockFn)
      expect(mountCustomRender.props().onClick).toHaveBeenCalledWith({
        ariaAttr,
        items: newNavigationItemsDataObject,
      })
    })
  })

  describe('Render', () => {
    test('must match renderDefault()', () => {
      mockLibraryForRegularItems()
      expect(global.renderToJSON(renderDefault())).toMatchSnapshot()
    })

    test('must match renderWithButtonActions()', () => {
      mockLibraryForRegularItems()
      expect(global.renderToJSON(renderWithButtonActions())).toMatchSnapshot()
    })

    test('must match renderWithTextActions()', () => {
      mockLibraryForRegularItems()
      expect(global.renderToJSON(renderWithTextActions())).toMatchSnapshot()
    })

    test('must match renderWithLinkActions()', () => {
      mockLibraryForRegularItems()
      expect(global.renderToJSON(renderWithLinkActions())).toMatchSnapshot()
    })

    test('must match renderWithNavigation()', () => {
      mockLibraryForRegularItems()
      expect(global.renderToJSON(renderWithNavigation())).toMatchSnapshot()
    })
  })
})
