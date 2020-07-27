const rootPath = '/'

const docsPath = '/docs'

const gettingStartedPath = '/getting-started'

const supportPath = {
  support: '/support',
  breakpoints: '/support/breakpoints',
  colorSystem: '/support/color-system',
  spacing: '/support/spacing',
  typography: '/support/typography',
  marketingVariables: '/support/marketing-variables',
  flexbox: '/support/flexbox',
  layout: '/support/layout',
}

const utilityPath = {
  utility: '/utility',
  animations: '/utility/animations',
  borders: '/utility/borders',
  marketingBorders: '/utility/marketing-borders',
  boxShadow: '/utility/box-shadow',
  colors: '/utility/colors',
  details: '/utility/details',
  marketingFilters: '/utility/marketing-filters',
  flexbox: '/utility/flexbox',
  layout: '/utility/layout',
  marketingLayout: '/utility/marketing-layout',
  margin: '/utility/margin',
  marketingMargin: '/utility/marketing-margin',
  padding: '/utility/padding',
  marketingPadding: '/utility/marketing-padding',
  typography: '/utility/typography',
  marketingTypography: '/utility/marketing-typography',
}

const objectsPath = {
  objects: '/objects',
  grid: '/objects/grid',
  layout: '/objects/layout',
  tableObject: '/objects/tableObject',
}

const componentsPath = {
  components: '/components',
  alerts: '/components/alerts',
  avatars: '/components/avatars',
  blankslate: '/components/blankslate',
  box: '/components/box',
  boxOverlay: '/components/box-overlay',
  boxedGroups: '/components/boxed-groups',
  branchName: '/components/branch-name',
  breadcrumb: '/components/breadcrumb',
  buttons: '/components/buttons',
  dropdown: '/components/dropdown',
  flashBanner: '/components/flash-banner',
  forms: '/components/forms',
  labels: '/components/labels',
  markdown: '/components/markdown',
  marketingButtons: '/components/marketing-buttons',
  navigation: '/components/navigation',
  octicons: '/components/octicons',
  pageHeaders: '/components/page-headers',
  pageSections: '/components/page-sections',
  pagehead: '/components/pagehead',
  pagination: '/components/pagination',
  popover: '/components/popover',
  progress: '/components/progress',
  selectMenu: '/components/select-menu',
  subhead: '/components/subhead',
  tables: '/components/tables',
  tooltips: '/components/tooltips',
  truncate: '/components/truncate',
}

export const appRootPath = process.env.BASE_URL ? `${process.env.BASE_URL}${rootPath}` : rootPath

export const docsPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${docsPath}` : docsPath

export const gettingStartedPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${gettingStartedPath}` : gettingStartedPath

export const supportPagePath = {
  support: process.env.BASE_URL ? `${process.env.BASE_URL}${supportPath.support}` : supportPath.support,
  breakpoints: process.env.BASE_URL ? `${process.env.BASE_URL}${supportPath.breakpoints}` : supportPath.breakpoints,
  colorSystem: process.env.BASE_URL ? `${process.env.BASE_URL}${supportPath.colorSystem}` : supportPath.colorSystem,
  spacing: process.env.BASE_URL ? `${process.env.BASE_URL}${supportPath.spacing}` : supportPath.spacing,
  typography: process.env.BASE_URL ? `${process.env.BASE_URL}${supportPath.typography}` : supportPath.typography,
  marketingVariables: process.env.BASE_URL ? `${process.env.BASE_URL}${supportPath.marketingVariables}` : supportPath.marketingVariables,
}

export const utilityPagePath = {
  utility: process.env.BASE_URL ? `${process.env.BASE_URL}${utilityPath.utility}` : utilityPath.utility,
  animations: process.env.BASE_URL ? `${process.env.BASE_URL}${utilityPath.animations}` : utilityPath.animations,
  borders: process.env.BASE_URL ? `${process.env.BASE_URL}${utilityPath.borders}` : utilityPath.borders,
  marketingBorders: process.env.BASE_URL ? `${process.env.BASE_URL}${utilityPath.marketingBorders}` : utilityPath.marketingBorders,
  boxShadow: process.env.BASE_URL ? `${process.env.BASE_URL}${utilityPath.boxShadow}` : utilityPath.boxShadow,
  colors: process.env.BASE_URL ? `${process.env.BASE_URL}${utilityPath.colors}` : utilityPath.colors,
  details: process.env.BASE_URL ? `${process.env.BASE_URL}${utilityPath.details}` : utilityPath.details,
  marketingFilters: process.env.BASE_URL ? `${process.env.BASE_URL}${utilityPath.marketingFilters}` : utilityPath.marketingFilters,
  flexbox: process.env.BASE_URL ? `${process.env.BASE_URL}${utilityPath.flexbox}` : utilityPath.flexbox,
  layout: process.env.BASE_URL ? `${process.env.BASE_URL}${utilityPath.layout}` : utilityPath.layout,
  marketingLayout: process.env.BASE_URL ? `${process.env.BASE_URL}${utilityPath.marketingLayout}` : utilityPath.marketingLayout,
  margin: process.env.BASE_URL ? `${process.env.BASE_URL}${utilityPath.margin}` : utilityPath.margin,
  marketingMargin: process.env.BASE_URL ? `${process.env.BASE_URL}${utilityPath.marketingMargin}` : utilityPath.marketingMargin,
  padding: process.env.BASE_URL ? `${process.env.BASE_URL}${utilityPath.padding}` : utilityPath.padding,
  marketingPadding: process.env.BASE_URL ? `${process.env.BASE_URL}${utilityPath.marketingPadding}` : utilityPath.marketingPadding,
  typography: process.env.BASE_URL ? `${process.env.BASE_URL}${utilityPath.typography}` : utilityPath.typography,
  marketingTypography: process.env.BASE_URL ? `${process.env.BASE_URL}${utilityPath.marketingTypography}` : utilityPath.marketingTypography,
}

export const objectsPagePath = {
  objects: process.env.BASE_URL ? `${process.env.BASE_URL}${objectsPath.objects}` : objectsPath.objects,
  grid: process.env.BASE_URL ? `${process.env.BASE_URL}${objectsPath.grid}` : objectsPath.grid,
  layout: process.env.BASE_URL ? `${process.env.BASE_URL}${objectsPath.layout}` : objectsPath.layout,
  tableObject: process.env.BASE_URL ? `${process.env.BASE_URL}${objectsPath.tableObject}` : objectsPath.tableObject,
}

export const componentsPagePath = {
  components: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.components}` : componentsPath.components,
  alerts: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.alerts}` : componentsPath.alerts,
  avatars: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.avatars}` : componentsPath.avatars,
  blankslate: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.blankslate}` : componentsPath.blankslate,
  box: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.box}` : componentsPath.box,
  boxOverlay: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.boxOverlay}` : componentsPath.boxOverlay,
  boxedGroups: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.boxedGroups}` : componentsPath.boxedGroups,
  branchName: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.branchName}` : componentsPath.branchName,
  breadcrumb: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.breadcrumb}` : componentsPath.breadcrumb,
  buttons: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.buttons}` : componentsPath.buttons,
  dropdown: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.dropdown}` : componentsPath.dropdown,
  flashBanner: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.flashBanner}` : componentsPath.flashBanner,
  forms: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.forms}` : componentsPath.forms,
  labels: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.labels}` : componentsPath.labels,
  markdown: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.markdown}` : componentsPath.markdown,
  marketingButtons: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.marketingButtons}` : componentsPath.marketingButtons,
  navigation: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.navigation}` : componentsPath.navigation,
  octicons: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.octicons}` : componentsPath.octicons,
  pageHeaders: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.pageHeaders}` : componentsPath.pageHeaders,
  pageSections: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.pageSections}` : componentsPath.pageSections,
  pagehead: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.pagehead}` : componentsPath.pagehead,
  pagination: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.pagination}` : componentsPath.pagination,
  popover: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.popover}` : componentsPath.popover,
  progress: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.progress}` : componentsPath.progress,
  selectMenu: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.selectMenu}` : componentsPath.selectMenu,
  subhead: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.subhead}` : componentsPath.subhead,
  tables: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.tables}` : componentsPath.tables,
  tooltips: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.tooltips}` : componentsPath.tooltips,
  truncate: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.truncate}` : componentsPath.truncate,
}
