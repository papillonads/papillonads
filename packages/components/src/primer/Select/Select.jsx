/* eslint-disable jsx-a11y/no-onchange  */
import React from 'react'
import cx from 'classnames'
import { v1 as uuidv1 } from 'uuid'
import layoutStyles from '@papillonads/css/build/primer/utilities/layout.scss'
import { getIndexItems, getIndexItemsWithSelected } from '@papillonads/library/array'
import { propTypes, defaultProps, selectState } from './Select.prop'
import styles from './Select.scss'

export function Select({ id, className, selectedText, items, onChange, state }) {
  const indexItems = getIndexItems(items)

  const handleOnChange = (event) => {
    const newIndexItems = getIndexItemsWithSelected(indexItems, indexItems[event.target.value])

    onChange({
      selectedText: indexItems[event.target.value].text,
      items: newIndexItems.map((newIndexItem) =>
        (({ text: newIndexItemText, isSelected: newIndexItemIsSelected }) => ({
          text: newIndexItemText,
          isSelected: newIndexItemIsSelected,
        }))(newIndexItem),
      ),
    })
  }

  return (
    <div className={cx(className, styles.select)}>
      <select
        id={id}
        readOnly={false}
        onChange={handleOnChange}
        className={cx(styles['select-menu'], layoutStyles['width-full'], {
          [styles['select-inactive']]: state === selectState.inactive,
        })}
        value={selectedText}
      >
        {items &&
          indexItems.map((indexItem) => {
            const { index, text } = indexItem

            return (
              <option key={uuidv1()} value={index}>
                {text}
              </option>
            )
          })}
      </select>
    </div>
  )
}

Select.propTypes = propTypes

Select.defaultProps = defaultProps
