import { SupportPage } from '../../pattern/page/SupportPage'
import { supportPagePath } from '../path'

export const breakpointsRoute = {
  path: supportPagePath.breakpoints,
  exact: true,
  clientComponent: SupportPage.Breakpoints.AsyncBreakpoints,
  serverComponent: SupportPage.Breakpoints.Breakpoints,
}
