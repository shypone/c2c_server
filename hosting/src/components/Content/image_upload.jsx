import React from 'react';
import { firebaseDb } from '../../firebase/index.js'

class ImageUploadApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  _handleSubmit(e) {
    e.preventDefault();
    let ref = firebaseDb.ref('items')
    let createContent = {
      "title" : e.target.parentElement.children[0].value,
      "image" : this.state.imagePreviewUrl
    };

    
    //let file = this.state.file;
    ref.push(createContent).then(() => {
      // Fixme:Now is allowed to upload everybody.See below.
      // https://firebase.google.com/docs/storage/security/user-security?hl=ja
      console.log('Uploaded a blob or file!');
    });
    alert('uploaded successfully!!');
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    return (
      <div className="previewComponent">
        <form onSubmit={e => this._handleSubmit(e)}>
          <input
            className="fileInput"
            type="text"
          />
          <input
            className="fileInput"
            type="file"
            onChange={e => this._handleImageChange(e)}
          />
          <button
            className="submitButton"
            type="submit"
            onClick={e => this._handleSubmit(e)}
          >
            submit
          </button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    );
  }
}

export default ImageUploadApp
//ReactDOM.render(<ImageUpload />, document.getElementById("mainApp"));

