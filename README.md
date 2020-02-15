# react-profile-image-box

> Profile image box for user to view profile image and upload image to server

[![NPM](https://img.shields.io/npm/v/react-profile-image-box.svg)](https://www.npmjs.com/package/react-profile-image-box) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-profile-image-box
```

## Usage

```jsx
import React, { Component } from 'react'

import ProfileImageBox from 'react-profile-image-box'

export default class App extends Component {
  state = {
    src: "http://test.com/avatar_images_by_user/72"
  }

  onFileChange(e, additionalParams) {
    console.log(e.target.files);    
    console.log(additionalParams);
    
    this.setState({src: "http://test.com/avatar_images_by_user/70"});
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
```

## License

MIT © [pritomkucse](https://bitbucket.org/pritomkucse/)
