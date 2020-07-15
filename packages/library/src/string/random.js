export function getRandomAlphaNumericString() {
  return Math.random().toString(36).slice(2)
}

export function getRandomAlphaNumericStringByLength({ length }) {
  let randomAlphaNumericString = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i += 1) randomAlphaNumericString += characters.charAt(Math.floor(Math.random() * characters.length))

  return randomAlphaNumericString !== '' ? randomAlphaNumericString : getRandomAlphaNumericString()
}
