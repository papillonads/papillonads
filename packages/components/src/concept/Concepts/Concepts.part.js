import README from '../../../../../README.md'

export const stripIds = [
  'badges',
  'logo',
  'heading',
  'intro',
  'intro-quote',
  'packages',
  'packages-quote',
  'concepts',
  'concepts-quote',
  'accessibility-implementation',
  'application-architecture-implementation',
  'bootstrap-implementation',
  'code-style-implementation',
  'compiling-implementation',
  'component-design-implementation',
  'component-driven-development-implementation',
  'continuous-delivery-implementation',
  'continuous-integration-implementation',
  'cross-browser-compatibility-implementation',
  'css-architecture-implementation',
  'language-implementation',
  'local-development-implementation',
  'microsite-implementation',
  'monorepo-implementation',
  'rendering-implementation',
  'routing-implementation',
  'runtime-implementation',
  'testing-implementation',
  'version-control-implementation',
  'components-package',
  'css-package',
  'docs-package',
  'library-package',
  'styleguide-package',
]

export function createElement(tag, innerHTML) {
  const element = document.createElement(tag)
  document.body.appendChild(element)
  element.innerHTML = innerHTML
  return element
}

export function removeElementById(id) {
  const element = document.getElementById(id)
  element.parentNode.removeChild(element)
}

export function removeElementFromDocumentBody(element) {
  document.body.removeChild(element)
}

export function stripDocument() {
  const html = createElement('div', README)

  stripIds.map((id) => removeElementById(id))

  removeElementFromDocumentBody(html)

  return html.innerHTML
}
