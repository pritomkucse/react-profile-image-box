import React, { Component } from 'react'

import ProfileImageBox from 'react-profile-image-box'

export default class App extends Component {
  state = {
    src: "http://arranzed2.com/avatar_images_by_user/72"
  }

  onFileChange(e, additionalParams) {
    console.log(e.target.files);
    console.log(additionalParams);
    this.setState({src: "http://arranzed2.com/avatar_images_by_user/70"});
  }

  render () {
    return (
      <div>
        <ProfileImageBox 
          alt="Alt Text" 
          allowUpload={true} 
          onFileChange={(e) => this.onFileChange(e, {type: 'user-image'})} 
          src={this.state.src}/>
      </div>
    )
  }
}
