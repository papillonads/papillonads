import { stagingHosts, productionHost, isRunningOnLocalHost } from './host'

export const setup = Object.freeze({
  protocol: 'https',
  domain: 'papillonads.com',
  stagingHosts: {
    development: `api-${stagingHosts.development}`,
    test: `api-${stagingHosts.test}`,
    acceptance: `api-${stagingHosts.acceptance}`,
  },
  productionHost: `api-${productionHost}`,
  targetHost: isRunningOnLocalHost ? `api-${process.env.API_TARGET_HOST}` : `api-${productionHost}`,
  paths: {
    authorize: 'authorize',
    login: 'login',
  },
  authentication: {
    username: isRunningOnLocalHost ? process.env.ACCESS_TOKEN_USERNAME : '',
    password: isRunningOnLocalHost ? process.env.ACCESS_TOKEN_PASSWORD : '',
    isUserSignedIn: isRunningOnLocalHost ? process.env.IS_USER_SIGNED_IN === 'true' : false,
  },
  isMockingApiCalls: process.env.IS_MOCKING_API_CALLS === 'true',
})
