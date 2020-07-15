export function getLocaleDateTimeString(date) {
  return date ? `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` : null
}
