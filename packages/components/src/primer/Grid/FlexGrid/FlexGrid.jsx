import React from 'react'
import cx from 'classnames'
import { v1 as uuidv1 } from 'uuid'
import { sort as sortLibrary, string as stringLibrary } from '@papillonads/library'
import displayStyles from '@papillonads/css/build/primer/utilities/visibility-display.scss'
import flexboxStyles from '@papillonads/css/build/primer/utilities/flexbox.scss'
import borderStyles from '@papillonads/css/build/primer/utilities/borders.scss'
import paddingStyles from '@papillonads/css/build/primer/utilities/padding.scss'
import marginStyles from '@papillonads/css/build/primer/utilities/margin.scss'
import typographyStyles from '@papillonads/css/build/primer/utilities/typography.scss'
import layoutStyles from '@papillonads/css/build/primer/utilities/layout.scss'
import colorStyles from '@papillonads/css/build/primer/utilities/colors.scss'
import truncateStyles from '@papillonads/css/build/primer/truncate/index.scss'
import gridStyles from '../../Layout/grid.scss'
import { propTypes, defaultProps, flexGridSelection } from './FlexGrid.prop'
import styles from './FlexGrid.scss'
import { Radio } from '../../Form/Radio'
import { Checkbox } from '../../Form/Checkbox'
import { Icon, iconName, iconSize } from '../../Icon'

export function FlexGrid({ className, items, idIndex, isSelectedIndex, selection, sort, onChange, onClick, onDoubleClick }) {
  const { sortOrder } = sortLibrary

  const { getCapizalizedString } = stringLibrary

  return (
    <div className={className}>
      <div
        className={cx(displayStyles['d-flex'], flexboxStyles['flex-row'], flexboxStyles['flex-items-start'], colorStyles['bg-blue-light'], {
          [borderStyles.border]: items?.[0],
        })}
      >
        {items?.[0]?.names?.map((name, nameIndex) => {
          const isIdColumn = nameIndex === idIndex
          const isSelectedColumn = nameIndex === isSelectedIndex
          const isSelectedComponent =
            selection === flexGridSelection.radio ? null : (
              <Checkbox
                ariaAttr={{ describedBy: name }}
                isChecked={items
                  .map((item) => {
                    return item.values[1]
                  })
                  .every((isSelected) => isSelected === true)}
                onChange={(event) => {
                  const newItems = items
                    ?.map(({ values }) => {
                      return values?.map((value, valueIndex) => {
                        return valueIndex === isSelectedIndex ? event.target.checked : value
                      })
                    })
                    .map((newItem) => {
                      return {
                        id: newItem[idIndex],
                        isSelected: newItem[isSelectedIndex],
                      }
                    })
                  onChange(newItems)
                }}
              />
            )

          let sortComponent

          if (sort.index === nameIndex && sort.value === name) {
            if (sort.order === sortOrder.ascending) {
              sortComponent = <Icon icon={iconName.TriangleUp16} size={iconSize.small} />
            } else {
              sortComponent = <Icon icon={iconName.TriangleDown16} size={iconSize.small} />
            }
          }

          return (
            <React.Fragment key={uuidv1()}>
              {!isIdColumn && (
                <div
                  className={cx(
                    typographyStyles.h6,
                    displayStyles['d-flex'],
                    flexboxStyles['flex-row'],
                    paddingStyles['p-2'],
                    truncateStyles['css-truncate'],
                    truncateStyles['css-truncate-overflow'],
                    styles.item,
                    {
                      [gridStyles['col-2']]: isSelectedColumn,
                      [gridStyles['col-12']]: !isSelectedColumn,
                      [flexboxStyles['flex-justify-center']]: isSelectedColumn,
                      [flexboxStyles['flex-justify-between']]: !isSelectedColumn,
                    },
                  )}
                  onClick={() => {
                    if (!isSelectedColumn) {
                      onClick({
                        index: nameIndex,
                        value: name,
                        order: sort.order,
                      })
                    }
                  }}
                  onKeyPress={() => {}}
                  role="button"
                  tabIndex={0}
                >
                  {isSelectedColumn ? (
                    isSelectedComponent
                  ) : (
                    <div className={cx(displayStyles['d-flex'], flexboxStyles['flex-justify-between'], layoutStyles['width-full'])}>
                      <div className={cx(truncateStyles['css-truncate'], truncateStyles['css-truncate-overflow'])}>
                        {getCapizalizedString({ string: name })}
                      </div>
                      <div className={cx(displayStyles['d-flex'], flexboxStyles['flex-items-start'], marginStyles['ml-1'])}>
                        {sortComponent}
                        {nameIndex < items?.[0]?.names.length - 1 ? (
                          <span className={cx(marginStyles['ml-1'], colorStyles['text-gray-light'])}> |</span>
                        ) : null}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>
      {items?.map((item, itemIndex) => {
        return (
          <div
            key={uuidv1()}
            className={cx(
              displayStyles['d-flex'],
              flexboxStyles['flex-row'],
              flexboxStyles['flex-items-start'],
              borderStyles.border,
              styles.item,
            )}
            onClick={() => {
              let bubleUpNewItems = true

              const newItems = items
                ?.map(({ values }, newItemIndex) => {
                  return values?.map((newValue, newValueIndex) => {
                    if (typeof newValue === 'object' && ['FileDirectory', 'File'].includes(newValue?.icon)) {
                      bubleUpNewItems = false
                    }
                    return newItemIndex === itemIndex && newValueIndex === isSelectedIndex ? !newValue : newValue
                  })
                })
                .map((newItem) => {
                  return {
                    id: newItem[idIndex],
                    isSelected: newItem[isSelectedIndex],
                  }
                })
              if (bubleUpNewItems) {
                onChange(newItems)
              }
            }}
            onKeyPress={() => {}}
            role="button"
            tabIndex={0}
            onDoubleClick={() => {
              onDoubleClick(item.values[0])
            }}
          >
            {item.values.map((value, valueIndex) => {
              const idColumn = valueIndex === idIndex
              const isSelectedColumn = valueIndex === isSelectedIndex
              const isSelectedComponent =
                selection === flexGridSelection.radio ? (
                  <Radio
                    name="isSelected"
                    isChecked={value}
                    onChange={(event) => {
                      const newItems = items?.map(({ names, values }, newItemIndex) => {
                        return {
                          names,
                          values: values.map((newValue, newValueIndex) => {
                            if (newItemIndex === itemIndex && newValueIndex === isSelectedIndex) {
                              return event.target.checked
                            }

                            if (newItemIndex === itemIndex && newValueIndex !== isSelectedIndex) {
                              return newValue
                            }

                            if (newItemIndex !== itemIndex && newValueIndex === isSelectedIndex) {
                              return false
                            }

                            if (newItemIndex !== itemIndex && newValueIndex !== isSelectedIndex) {
                              return newValue
                            }

                            return newValue
                          }),
                        }
                      })
                      onChange(newItems)
                    }}
                  />
                ) : (
                  <Checkbox
                    ariaAttr={{ describedBy: 'isSelected' }}
                    isChecked={value}
                    onChange={(event) => {
                      const newItems = items
                        ?.map(({ values }, newItemIndex) => {
                          return values?.map((newValue, newValueIndex) => {
                            return newItemIndex === itemIndex && newValueIndex === isSelectedIndex ? event.target.checked : newValue
                          })
                        })
                        .map((newItem) => {
                          return {
                            id: newItem[idIndex],
                            isSelected: newItem[isSelectedIndex],
                          }
                        })
                      onChange(newItems)
                    }}
                  />
                )
              const iconComponent = value?.icon ? <Icon icon={iconName[value.icon]} size={iconSize.small} /> : null

              return (
                <React.Fragment key={uuidv1()}>
                  {!idColumn && (
                    <div
                      key={uuidv1()}
                      className={cx(
                        displayStyles['d-flex'],
                        flexboxStyles['flex-row'],
                        paddingStyles['p-2'],
                        truncateStyles['css-truncate'],
                        truncateStyles['css-truncate-overflow'],
                        typographyStyles['no-wrap'],
                        {
                          [gridStyles['col-2']]: isSelectedColumn,
                          [gridStyles['col-12']]: !isSelectedColumn,
                          [flexboxStyles['flex-justify-center']]: isSelectedColumn,
                          [flexboxStyles['flex-justify-start']]: !isSelectedColumn,
                        },
                      )}
                    >
                      {isSelectedColumn ? (
                        isSelectedComponent
                      ) : (
                        <div className={cx(truncateStyles['css-truncate'], truncateStyles['css-truncate-overflow'])}>
                          {value?.icon && (
                            <React.Fragment>
                              {iconComponent}
                              <span className={marginStyles['ml-2']}>{value.value}</span>
                            </React.Fragment>
                          )}
                          {value instanceof Date && `${value.toLocaleDateString()} ${value.toLocaleTimeString()}`}
                          {Array.isArray(value) &&
                            value.find(({ isSelected }) => {
                              return isSelected === true
                            }).text}
                          {!value?.icon && !(value instanceof Date) && !Array.isArray(value) && value?.toString()}
                        </div>
                      )}
                    </div>
                  )}
                </React.Fragment>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

FlexGrid.propTypes = propTypes

FlexGrid.defaultProps = defaultProps
