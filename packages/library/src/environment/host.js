export const localHost = 'localhost'

export const stagingHosts = Object.freeze({
  development: 'development',
  test: 'test',
  acceptance: 'acceptance',
})

export const productionHost = 'production'

export const isRunningOnLocalHost = window.location.href.includes(localHost)

export const isRunningOnStaging =
  window.location.href.includes(stagingHosts.development) ||
  window.location.href.includes(stagingHosts.test) ||
  window.location.href.includes(stagingHosts.acc)

export const isRunningOnProduction = window.location.href.includes(productionHost)

export const windowLocationHrefHost = window.location.href.split('.')[0].split('//')[1]
