import React from 'react'
import cx from 'classnames'
import { v1 as uuidv1 } from 'uuid'
import { array as arrayLibrary } from '@papillonads/library'
import { propTypes, defaultProps } from './TabNav.prop'
import styles from './TabNav.scss'

export function TabNav({ className, ariaAttr, items, actions, onClick, children }) {
  if (!items) {
    return null
  }

  const { getIndexItems, getIndexItemsWithSelected } = arrayLibrary
  const { label, current } = ariaAttr
  const indexItems = getIndexItems(items)

  function renderActions() {
    return <React.Fragment>{actions}</React.Fragment>
  }

  return (
    <div className={cx(className, styles.tabnav)}>
      {actions && renderActions()}
      <nav className={styles['tabnav-tabs']} aria-label={label}>
        {indexItems.map((indexItem) => {
          const { href, text, link, isSelected } = indexItem

          const itemOtherProps = isSelected ? { ...{ 'aria-current': current } } : null

          if (href && text) {
            return (
              <a
                key={uuidv1()}
                onClick={() => {
                  const newIndexItems = getIndexItemsWithSelected(indexItems, indexItem)
                  onClick({
                    ariaAttr,
                    items: newIndexItems.map((newIndexItem) => {
                      return (({ href, text, isSelected }) => ({ href, text, isSelected }))(newIndexItem) // eslint-disable-line
                    }),
                  })
                }}
                className={styles['tabnav-tab']}
                href={href}
                {...itemOtherProps}
              >
                {text}
              </a>
            )
          }

          if (link) {
            const Link = link.component

            return (
              <Link
                key={uuidv1()}
                onClick={() => {
                  const newIndexItems = getIndexItemsWithSelected(indexItems, indexItem)
                  onClick({
                    ariaAttr,
                    items: newIndexItems.map((newIndexItem) => {
                      return (({ link, isSelected }) => ({ link, isSelected }))(newIndexItem) // eslint-disable-line
                    }),
                  })
                }}
                className={styles['tabnav-tab']}
                {...itemOtherProps}
                {...link.props}
              >
                {link.children}
              </Link>
            )
          }

          return null
        })}
      </nav>
      {children}
    </div>
  )
}

TabNav.propTypes = propTypes

TabNav.defaultProps = defaultProps
