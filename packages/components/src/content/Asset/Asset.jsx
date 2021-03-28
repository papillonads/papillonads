import { Fragment } from 'react'
import cx from 'classnames'
import { propTypes, defaultProps } from './Asset.prop'
import styles from './Asset.scss'
import { AssetIcon } from '../AssetIcon'

export function Asset({ className, src, status, title, type, ...otherProps }) {
  function renderImage() {
    return (
      <Fragment>
        <div className={styles['Asset__image-container']}>
          <img className={styles['Asset__image-container__image']} src={src} alt={title} />
        </div>
        <div className={styles['Asset__title-container']}>
          <span className={styles['Asset__title-container__title']}>{title}</span>
        </div>
      </Fragment>
    )
  }

  function renderAsset() {
    return (
      <div className={styles['Asset__asset-container']}>
        <div className={styles['Asset__illustration-container']}>
          <AssetIcon type={type} />
        </div>
        <span className={styles['Asset__asset-container__title']}>{title}</span>
      </div>
    )
  }

  const classNames = cx(styles.Asset, className)

  // Archived images will not have a preview available
  const asImage = type && type === 'image' && (!status || status !== 'archived')

  return (
    <div className={classNames} {...otherProps}>
      {asImage ? renderImage(src, title) : renderAsset(type, title)}
    </div>
  )
}

Asset.propTypes = propTypes

Asset.defaultProps = defaultProps
