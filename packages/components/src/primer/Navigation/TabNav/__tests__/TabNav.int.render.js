import React from 'react'
import { action } from '@storybook/addon-actions'
import cx from 'classnames'
import { BrowserRouter, Link } from 'react-router-dom'
import layoutStyles from '@papillonads/css/build/primer/utilities/layout.scss'
import tabNavStyles from '../TabNav.scss'
import buttonStyles from '../../../Button/Button.scss'

const TabNav =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../../index').primer.Navigation.TabNav
    : require('../../../../../build').primer.Navigation.TabNav

export const ariaAttr = {
  label: 'Foo bar',
  current: 'page',
}

export const defaultItems = [
  {
    href: '#url',
    text: 'Foo tab',
    isSelected: true,
  },
  { href: '#url', text: 'Bar tab', isSelected: false },
]

export const navigationItems = [
  {
    link: {
      component: Link,
      props: { ...{ to: '/foo' } },
      children: 'Foo link',
    },
    isSelected: true,
  },
  {
    link: {
      component: Link,
      props: { ...{ to: '/bar' } },
      children: 'Bar link',
    },
    isSelected: false,
  },
]

const actionButton = (
  <a className={cx(buttonStyles.btn, buttonStyles['btn-sm'], layoutStyles['float-right'])} href="#url" role="button">
    Button
  </a>
)

const buttonActions = [actionButton]

const actionText = <div className={cx(tabNavStyles['tabnav-extra'], layoutStyles['float-right'])}>Tabnav widget text here.</div>

const textActions = [actionText]

const actionLink = (
  <div className={layoutStyles['float-right']}>
    <a className={tabNavStyles['tabnav-extra']} href="#url">
      Tabnav extra link
    </a>
    <a className={tabNavStyles['tabnav-extra']} href="#url">
      Tabnav extra link
    </a>
  </div>
)

const linkActions = [actionLink]

export function renderCustom(items, onClick) {
  return (
    <BrowserRouter>
      <TabNav ariaAttr={ariaAttr} items={items} onClick={onClick} />
    </BrowserRouter>
  )
}

export function renderDefault() {
  return <TabNav ariaAttr={ariaAttr} items={defaultItems} onClick={action('onClick')} />
}

export function renderWithButtonActions() {
  return <TabNav ariaAttr={ariaAttr} items={defaultItems} actions={buttonActions} onClick={action('onClick')} />
}

export function renderWithTextActions() {
  return <TabNav ariaAttr={ariaAttr} items={defaultItems} actions={textActions} onClick={action('onClick')} />
}

export function renderWithLinkActions() {
  return <TabNav ariaAttr={ariaAttr} items={defaultItems} actions={linkActions} onClick={action('onClick')} />
}

export function renderWithNavigation() {
  return (
    <BrowserRouter>
      <TabNav ariaAttr={ariaAttr} items={navigationItems} onClick={action('onClick')} />
    </BrowserRouter>
  )
}
