import { string, oneOf } from 'prop-types'

export const assetType = {
  archive: 'archive',
  audio: 'audio',
  code: 'code',
  image: 'image',
  markup: 'markup',
  pdf: 'pdf',
  plaintext: 'plaintext',
  presentation: 'presentation',
  richtext: 'richtext',
  spreadsheet: 'spreadsheet',
  video: 'video',
}

export const assetState = {
  archived: 'archived',
  changed: 'changed',
  draft: 'draft',
  published: 'published',
}

export const propTypes = {
  className: string.isRequired,
  src: string.isRequired,
  title: string.isRequired,
  type: oneOf(Object.keys(assetType)),
  status: oneOf(Object.keys(assetState)),
}

export const defaultProps = {
  className: null,
  type: assetType.image,
  status: null,
}
