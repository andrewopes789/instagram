import React from 'react';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: '',
      caption: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.update = this.update.bind(this);
  }

  handleUpload(e) {
    e.preventDefault();

    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, images) => {
        if (error === null && images[0].secure_url !== '') {
          this.setState({img_url: images[0].secure_url});
        }
      }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.img_url !== '') {
      this.props.createPhoto(this.state)
      .then(() => this.props.history.push('/'));
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className='errors' key={error}>{error}</li>);
        })
      );
    }
  }

  render() {
    let imageShow = this.state.img_url === '' ? (
      imageShow = (
        <div
          className='image-show-container'
          onClick={this.handleUpload}>
          <div
            className='image-placeholder'
            >Click here to upload an image</div>
        </div>)
    ) : (
      imageShow = (
        <img
        src={this.state.img_url}
        className='upload-preview image-show-container'
        onClick={this.handleUpload}
        />
    )
    );

    return (
      <section className='photo-detail'>

        <div className='image-form-container'>

          <div className='new-post'>New Post</div>

            {imageShow}

          <form className='upload-form'>
            <label>
              <textarea
                className='caption-input'
                value={this.state.caption}
                placeholder='Add a caption...'
                onChange={this.update('caption')}
                />
            </label>

            <label>
              <button
                onClick={this.handleSubmit}
                className='upload-button'>Share</button>
            </label>

            <ul>
              {this.errors()}
            </ul>

          </form>
        </div>

      </section>
    );
  }
}

export default PhotoUpload;
