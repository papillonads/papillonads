import { AsyncObjectsPage as AsyncObjects, ObjectsPage as Objects } from './ObjectsPage'
import { AsyncGridPage as AsyncGrid, GridPage as Grid } from './GridPage'
import { AsyncLayoutPage as AsyncLayout, LayoutPage as Layout } from './LayoutPage'
import { AsyncTableObjectPage as AsyncTableObject, TableObjectPage as TableObject } from './TableObjectPage'

export const ObjectsPage = {
  Objects: { AsyncObjects, Objects },
  Grid: { AsyncGrid, Grid },
  Layout: { AsyncLayout, Layout },
  TableObject: { AsyncTableObject, TableObject },
}
