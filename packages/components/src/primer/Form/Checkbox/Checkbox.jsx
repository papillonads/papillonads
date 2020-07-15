import React from 'react'
import cx from 'classnames'
import marginStyles from '@papillonads/css/build/primer/utilities/margin.scss'
import { propTypes, defaultProps } from './Checkbox.prop'
import formStyles from '../Form.scss'

export function Checkbox({ className, htmlFor, ariaAttr, inputType, isChecked, text, onChange }) {
  const { describedBy } = ariaAttr

  return (
    <div className={cx(className, marginStyles['m-0'], formStyles['form-checkbox'])}>
      <label htmlFor={htmlFor}>
        <input
          type={inputType}
          aria-describedby={describedBy}
          onChange={(event) => {
            onChange(event)
          }}
          checked={isChecked}
        />
        {text}
      </label>
    </div>
  )
}

Checkbox.propTypes = propTypes

Checkbox.defaultProps = defaultProps
