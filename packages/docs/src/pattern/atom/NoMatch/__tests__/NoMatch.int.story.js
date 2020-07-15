import { storiesOf } from '@storybook/react'
import { defaultRender } from './NoMatch.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/NoMatch', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
