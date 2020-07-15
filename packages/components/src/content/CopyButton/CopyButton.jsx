import React, { useState } from 'react'
import cx from 'classnames'
import CopyToClipboard from 'react-copy-to-clipboard'
import { propTypes, defaultProps } from './CopyButton.prop'
import styles from './CopyButton.scss'
import { TabFocusTrap } from '../TabFocusTrap'
import { Icon } from '../Icon'

export function CopyButton({ copyValue, className, onCopy, tooltipPlace, tooltipText, tooltipCopiedText, ...otherProps }) {
  const [copied, setCopied] = useState(false) // eslint-disable-line
  let copyButton = React.createRef()

  function handleOnCopy(e) {
    if (onCopy) {
      onCopy(e)
    }
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
      if (copyButton) {
        copyButton.blur()
      }
    }, 1000)
  }

  const classNames = cx(styles.CopyButton, className) // eslint-disable-line

  return (
    <div className={classNames} id="copyButton" {...otherProps}>
      <CopyToClipboard text={copyValue || ''} onCopy={handleOnCopy}>
        <button
          type="button"
          ref={(ref) => {
            copyButton = ref
          }}
          className={styles.CopyButton__button}
        >
          <TabFocusTrap className={styles.CopyButton__TabFocusTrap}>
            <span className={styles.CopyButton__text}>Copy {copyValue} to clipboard</span>
            <Icon icon="Copy" color="muted" />
          </TabFocusTrap>
        </button>
      </CopyToClipboard>
    </div>
  )
}

CopyButton.propTypes = propTypes

CopyButton.defaultProps = defaultProps
