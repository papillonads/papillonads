const InViewport =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.InViewport
    : require('../../../../build').content.InViewport

const TextLink =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').content.TextLink
    : require('../../../../build').content.TextLink

export function renderDefault() {
  return (
    <InViewport>
      <TextLink>Fantastic Link</TextLink>
    </InViewport>
  )
}

export function renderWithAdditionalClassName() {
  return (
    <InViewport className="fantastic-class-name">
      <TextLink>Fantastic Link</TextLink>
    </InViewport>
  )
}

export function renderWithNoA11yIsues() {
  return (
    <InViewport>
      <TextLink>Some Link</TextLink>
    </InViewport>
  )
}
