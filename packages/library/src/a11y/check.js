import axe from 'react-axe'

export function checkAccessibilityIssues(react, reactDOM, delay) {
  if (process.env.NODE_ENV !== 'production') {
    axe(react, reactDOM, delay)
  }
}
