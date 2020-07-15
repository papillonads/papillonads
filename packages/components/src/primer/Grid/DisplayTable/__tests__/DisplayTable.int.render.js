import React from 'react'
import { data } from './DisplayTable.int.data'

const DisplayTable =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Grid.DisplayTable
    : require('../../../../../build').primer.Grid.DisplayTable

export function renderDefault() {
  const items = data[7].contents.map((filesObject) => {
    return (({ contents, path, id, isSelected, ...otherProperties }) => ({
      names: Object.keys({ id, isSelected, ...otherProperties }),
      values: Object.values({ id, isSelected, ...otherProperties }),
    }))(filesObject)
  })

  return <DisplayTable idIndex={0} items={items} />
}
