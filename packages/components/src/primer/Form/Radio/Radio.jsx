import React from 'react'
import cx from 'classnames'
import marginStyles from '@papillonads/css/build/primer/utilities/margin.scss'
import { propTypes, defaultProps } from './Radio.prop'
import formStyles from '../Form.scss'

export function Radio({ className, htmlFor, inputType, name, isChecked, text, onChange }) {
  return (
    <div className={cx(className, marginStyles['m-0'], formStyles['form-checkbox'])}>
      <label htmlFor={htmlFor}>
        <input
          type={inputType}
          name={name}
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

Radio.propTypes = propTypes

Radio.defaultProps = defaultProps
