import { AnchorHTMLAttributes, MouseEventHandler } from 'react'
import { string, node, bool, oneOf } from 'prop-types'
import { propTypes as iconPropTypes } from '../Icon/Icon.prop'

export const textLinkType = {
  primary: 'primary',
  positive: 'positive',
  negative: 'negative',
  secondary: 'secondary',
  muted: 'muted',
}

export const iconPositionType = {
  right: 'right',
  left: 'left',
}

export const propTypes = {
  className: string,
  children: node,
  linkType: oneOf(Object.keys(textLinkType)),
  href: AnchorHTMLAttributes,
  target: AnchorHTMLAttributes,
  rel: AnchorHTMLAttributes,
  disabled: bool,
  onClick: MouseEventHandler,
  icon: iconPropTypes.icon,
  text: string,
  iconPosition: oneOf(Object.keys(iconPositionType)),
}

export const defaultProps = {
  className: null,
  children: null,
  linkType: textLinkType.primary,
  href: null,
  target: null,
  rel: null,
  disabled: false,
  onClick: () => {},
  icon: null,
  text: null,
  iconPosition: iconPositionType.left,
}
