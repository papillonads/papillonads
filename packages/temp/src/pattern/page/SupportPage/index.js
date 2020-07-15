import { AsyncSupportPage as AsyncSupport, SupportPage as Support } from './SupportPage'
import { AsyncBreakpointsPage as AsyncBreakpoints, BreakpointsPage as Breakpoints } from './BreakpointsPage'
import { AsyncColorSystemPage as AsyncColorSystem, ColorSystemPage as ColorSystem } from './ColorSystemPage'
import { AsyncSpacingPage as AsyncSpacing, SpacingPage as Spacing } from './SpacingPage'
import { AsyncTypographyPage as AsyncTypography, TypographyPage as Typography } from './TypographyPage'
import {
  AsyncMarketingVariablesPage as AsyncMarketingVariables,
  MarketingVariablesPage as MarketingVariables,
} from './MarketingVariablesPage'

export const SupportPage = {
  Support: { AsyncSupport, Support },
  Breakpoints: { AsyncBreakpoints, Breakpoints },
  ColorSystem: { AsyncColorSystem, ColorSystem },
  Spacing: { AsyncSpacing, Spacing },
  Typography: { AsyncTypography, Typography },
  MarketingVariables: { AsyncMarketingVariables, MarketingVariables },
}
