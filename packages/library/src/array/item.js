export function getCurrentIndex(indexItems) {
  return (
    indexItems.filter((indexItem) => {
      return indexItem.isCurrent
    })[0]?.index ?? -1
  )
}

export function getIndexItems(items) {
  return items.map((item, index) => {
    return {
      ...item,
      index,
    }
  })
}

export function getIndexItemsWithSelected(indexItems, selectedItem) {
  return indexItems.map((indexItem) => {
    return {
      ...indexItem,
      isSelected: indexItem.index === selectedItem.index,
    }
  })
}
