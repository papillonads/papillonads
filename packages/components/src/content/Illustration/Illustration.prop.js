import { string, oneOf } from 'prop-types'

export const illustrationName = {
  Archive: 'Archive',
  Audio: 'Audio',
  Code: 'Code',
  Image: 'Image',
  Markup: 'Markup',
  Pdf: 'Pdf',
  Plaintext: 'Plaintext',
  Presentation: 'Presentation',
  Richtext: 'Richtext',
  Spreadsheet: 'Spreadsheet',
  Video: 'Video',
}

export const propTypes = {
  className: string,
  illustration: oneOf(Object.keys(illustrationName)).isRequired,
}

export const defaultProps = {
  className: null,
}
