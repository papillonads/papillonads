import React from 'react'
import { text } from '@storybook/addon-knobs'

const HelpText =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.HelpText
    : require('../../../../build').content.HelpText

const TextLink =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.TextLink
    : require('../../../../build').content.TextLink

export function renderDefault() {
  return <HelpText className={text('className', '')}>{text('Child Text', 'fantastic child text')}</HelpText>
}

export function renderWithAdditionalClassName() {
  return <HelpText className="fantastic-class-name">fantastic child text</HelpText>
}

export function renderWithLink() {
  return (
    <HelpText className={text('className', '')}>
      Some Text and then <TextLink> a link.</TextLink>
    </HelpText>
  )
}

export function renderWithNoA11yIsues() {
  return <HelpText className={text('className', '')}>{text('Child Text', 'fantastic child text')}</HelpText>
}
