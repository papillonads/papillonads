import React from 'react'
import { action } from '@storybook/addon-actions'
import { sort as sortLibrary } from '@papillonads/library'
import { flexGridSelection } from '../FlexGrid.prop'
import { data } from './FlexGrid.int.data'

const { sortDefault } = sortLibrary

const FlexGrid =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Grid.FlexGrid
    : require('../../../../../build').primer.Grid.FlexGrid

const radioItemsWithSelection = data.map((filesObject) => {
  return (({ contents, path, id, isSelected, ...otherProperties }) => ({
    names: Object.keys({ id, isSelected, ...otherProperties }),
    values: Object.values({ id, isSelected, ...otherProperties }),
  }))(filesObject)
})

const radioItemsWithoutSelection = data.map((filesObject) => {
  return (({ contents, path, id, isSelected, ...otherProperties }) => ({
    names: Object.keys({ id, ...otherProperties }),
    values: Object.values({ id, ...otherProperties }),
  }))(filesObject)
})

const checkboxItemsWithSelection = data[7].contents.map((filesObject) => {
  return (({ contents, path, id, isSelected, ...otherProperties }) => ({
    names: Object.keys({ id, isSelected, ...otherProperties }),
    values: Object.values({ id, isSelected, ...otherProperties }),
  }))(filesObject)
})

const checkboxItemsWithoutSelection = data[7].contents.map((filesObject) => {
  return (({ contents, path, id, isSelected, ...otherProperties }) => ({
    names: Object.keys({ id, ...otherProperties }),
    values: Object.values({ id, ...otherProperties }),
  }))(filesObject)
})

export function renderRadioWithSelection() {
  return (
    <FlexGrid
      items={radioItemsWithSelection}
      idIndex={0}
      isSelectedIndex={1}
      selection={flexGridSelection.radio}
      sort={sortDefault}
      onChange={action('onChange')}
      onDoubleClick={action('onDoubleClick')}
    />
  )
}

export function renderRadioWithoutSelection() {
  return <FlexGrid idIndex={0} items={radioItemsWithoutSelection} sort={sortDefault} onChange={action('onChange')} />
}

export function renderCheckboxWithSelection() {
  return (
    <FlexGrid
      items={checkboxItemsWithSelection}
      idIndex={0}
      isSelectedIndex={1}
      selection={flexGridSelection.checkbox}
      sort={sortDefault}
      onChange={action('onChange')}
      onDoubleClick={action('onDoubleClick')}
    />
  )
}

export function renderCheckboxWithoutSelection() {
  return (
    <FlexGrid
      idIndex={0}
      items={checkboxItemsWithoutSelection}
      sort={sortDefault}
      onChange={action('onChange')}
      onDoubleClick={action('onDoubleClick')}
    />
  )
}
