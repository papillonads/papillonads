import {
  localHost,
  stagingHosts,
  productionHost,
  isRunningOnLocalHost,
  isRunningOnStaging,
  isRunningOnProduction,
  windowLocationHrefHost,
} from './host'

import { setup } from './api'

export const environment = {
  host: {
    localHost,
    stagingHosts,
    productionHost,
    isRunningOnLocalHost,
    isRunningOnStaging,
    isRunningOnProduction,
    windowLocationHrefHost,
  },
  api: {
    setup,
  },
}
