import { storiesOf } from '@storybook/react'
import {
  renderDefault,
  renderWithAdditionalClassName,
  renderAsButton,
  renderAsLink,
  renderAsPrimaryLinkType,
  renderAsPositiveLinkType,
  renderAsNegativeLinkType,
  renderAsSecondaryLinkType,
  renderAsMutedLinkType,
  renderAllowNotConsumedAdditionalProps,
  renderWithLeftIcon,
  renderWithRightIcon,
  renderWithNoA11yIsuesAsButton,
  renderWithNoA11yIsuesAsLink,
} from './TextLink.int.render'
import notes from '../TextLink.md'

storiesOf('Content|Molecule/TextLink', module)
  .add('Default', renderDefault, { notes })
  .add('WithAdditionalClassName', renderWithAdditionalClassName, { notes })
  .add('AsButton', renderAsButton, { notes })
  .add('AsLink', renderAsLink, { notes })
  .add('AsPrimaryLinkType', renderAsPrimaryLinkType, { notes })
  .add('AsPositiveLinkType', renderAsPositiveLinkType, { notes })
  .add('AsNegativeLinkType', renderAsNegativeLinkType, { notes })
  .add('AsSecondaryLinkType', renderAsSecondaryLinkType, { notes })
  .add('AsMutedLinkType', renderAsMutedLinkType, { notes })
  .add('AllowNotConsumedAdditionalProps', renderAllowNotConsumedAdditionalProps, { notes })
  .add('WithLeftIcon', renderWithLeftIcon, { notes })
  .add('WithRightIcon', renderWithRightIcon, { notes })
  .add('WithNoA11yIsuesAsButton', renderWithNoA11yIsuesAsButton, { notes })
  .add('WithNoA11yIsuesAsLink', renderWithNoA11yIsuesAsLink, { notes })
