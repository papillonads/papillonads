import { storiesOf } from '@storybook/react'
import { defaultRender } from './UnderConstruction.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/UnderConstruction', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
