export function getRandomDecimal({ min = 0, max, decimal = 2 }) {
  return (Math.floor(Math.random() * (max - min) + min) / 100).toFixed(decimal)
}

export function getRandomInteger({ min = 0, max }) {
  return Math.floor(Math.random() * (max - min) + min)
}
