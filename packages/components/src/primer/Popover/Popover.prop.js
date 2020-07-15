import { string, oneOf, func } from 'prop-types'

export const popoverVariant = {
  default: 'default',
  bottom: 'bottom',
  bottomRight: 'bottom-right',
  bottomLeft: 'bottom-left',
  left: 'left',
  leftBottom: 'left-bottom',
  leftTop: 'left-top',
  right: 'right',
  rightBottom: 'right-bottom',
  rightTop: 'right-top',
  topLeft: 'top-left',
  topRight: 'top-right',
}

export const popoverSize = {
  normal: 'normal',
  large: 'large',
}

export const propTypes = {
  className: string,
  variant: oneOf(Object.keys(popoverVariant)),
  size: oneOf(Object.keys(popoverSize)),
  intro: string.isRequired,
  heading: string.isRequired,
  message: string.isRequired,
  acknowledge: string.isRequired,
  introOnClick: func.isRequired,
  acknowledgeOnClick: func.isRequired,
}

export const defaultProps = {
  className: null,
  variant: popoverVariant.default,
  size: popoverSize.normal,
}
