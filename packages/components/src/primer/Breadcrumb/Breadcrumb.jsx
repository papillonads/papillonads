/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import cx from 'classnames'
import { v1 as uuidv1 } from 'uuid'
import utilityStyles from '@papillonads/css/build/primer/utilities/typography.scss'
import { array as arrayLibrary } from '@papillonads/library'
import { propTypes, defaultProps } from './Breadcrumb.prop'
import styles from './Breadcrumb.scss'

export function Breadcrumb({ className, ariaAttr, items, onClick }) {
  const { getIndexItems, getIndexItemsWithSelected } = arrayLibrary
  const indexItems = getIndexItems(items)
  const { label, current } = ariaAttr

  return (
    <nav className={cx(className)} aria-label={label}>
      <ol>
        {indexItems.map((indexItem) => {
          const { href, text, isSelected } = indexItem

          const itemOtherProps = isSelected ? { ...{ 'aria-current': current } } : null

          return (
            <li
              key={uuidv1()}
              onClick={(e) => {
                e.preventDefault()
                const newIndexItems = getIndexItemsWithSelected(indexItems, indexItem)
                onClick({
                  active: text,
                  ariaAttr,
                  items: newIndexItems.map((newIndexItem) => {
                    return (({ href, text, isSelected }) => ({ href, text, isSelected }))(newIndexItem) // eslint-disable-line
                  }),
                })
              }}
              className={
                !isSelected
                  ? cx(styles['breadcrumb-item'])
                  : cx(styles['breadcrumb-item'], styles['breadcrumb-item-selected'], utilityStyles['text-gray'])
              }
              href={href}
              {...itemOtherProps}
            >
              {isSelected ? text : <a href={href}>{text}</a>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

Breadcrumb.propTypes = propTypes

Breadcrumb.defaultProps = defaultProps
/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-enable jsx-a11y/click-events-have-key-events */
