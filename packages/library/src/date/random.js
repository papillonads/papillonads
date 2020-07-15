export function getRandomDate(start = new Date(2013, 1, 1), end = new Date()) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
