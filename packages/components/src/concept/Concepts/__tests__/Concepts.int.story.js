import { storiesOf } from '@storybook/react'
import { renderDefault } from './Concepts.int.render'
import notes from '../Concepts.md'

storiesOf('Concept|Index', module).add("Gettin' Jiggy Wit It", renderDefault, { notes })
