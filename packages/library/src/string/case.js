export function getCapizalizedString({ string, separator = '-' }) {
  const splitted = string.split(separator)
  const capitalized = splitted.map((splittedItem) => {
    return `${splittedItem.charAt(0).toUpperCase()}${splittedItem.slice(1)}`
  })

  return capitalized.join(' ')
}
