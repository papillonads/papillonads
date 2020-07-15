import { string, oneOf, node } from 'prop-types'

export const noteType = {
  primary: 'primary',
  positive: 'positive',
  negative: 'negative',
  warning: 'warning',
}

export const propTypes = {
  className: string,
  noteType: oneOf(Object.keys(noteType)),
  title: string,
  children: node.isRequired,
}

export const defaultProps = {
  className: null,
  noteType: noteType.primary,
  title: null,
}
