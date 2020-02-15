import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ProfileImageBox extends Component {
  /**
     * src: The src for img tag
     * alt: Alt text for img tag
     * allowUpload: Boolean field to set if image can be changed or not
     * onFileChange: A function that will receive file change event
     */
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    allowUpload: PropTypes.bool,
    onFileChange: PropTypes.func
  }

  static defaultProps = {
    allowUpload: false,
    onFileChange: function(e, additionalParams) {
      alert("You need to implement onFileChange(e) method")
    }
  }

  constructor (props) {
    super(props)
  }

  render() {
    const {
      src, alt, allowUpload, onFileChange
    } = this.props

    return (
      <div className={styles.react_profile_image_box_container}>
        {allowUpload ? (<input 
          className={styles.react_profile_image_box_upload_profile_image_input}
          onChange={(e) => onFileChange(e)} 
          type="file"/>) : ''}
        
        <img 
          className={styles.react_profile_image_box_rounded_circle} 
          alt={alt} 
          src={src} 
          data-holder-rendered="true"/>
      </div>
    )
  }
}
