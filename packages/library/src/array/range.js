export function getRange({ range, indexSeed = 0, valueSeed = 0 }) {
  return Array(range)
    .fill()
    .map((_, index) => valueSeed + index + indexSeed)
}
