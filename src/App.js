import React, { Component } from 'react';
import { connect } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import _ from "lodash";
import { getPosts, savePost, deletePost } from "./Actions/PostActions";
import './Styles/App.css';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import Dropzone from 'react-dropzone';
import { upload } from '../node_modules/cloudinary/lib/uploader';

class App extends Component {
  constructor() {
    super()
    this.state = {
      accepted: [],
      rejected: []
    }
  }
  componentWillMount() {
    this.props.getPosts();
  }
  renderField(field) {
    return (
      <input type="text" placeholder={`Enter a ${field.label}...`} {...field.input} className={field.class} />
    )
  }
  onSubmit(values) {
    this.props.savePost(values).then(this.props.dispatch(reset('NewPost')))
  }
  load = (e) => {
    e.preventDefault();
    window.cloudinary.openUploadWidget({ cloud_name: 'classvideo', upload_preset: 'classVideo',  },
      function (error, result) { console.log(result) });
  }
  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <div className="card post" key={key}>
          <div className="card-block">
            <h3 className="card-title">{post.title}</h3>
            <p className="card-text">{post.body}</p>
            <button onClick={() => {
              this.props.deletePost(key);
            }}>Delete</button>
          </div>
        </div>
      );
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <div className="main">
          {this.renderPosts()}
        </div>
        <div>
          <button onClick={this.load}>upload Image</button>
        </div>
        <div className="text-center fixed-bottom mb-3">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <CloudinaryContext cloudName="classvideo">
              <div>
                <Video publicId="s4nzrwpdcdfyxrn8ajpx" />
                <Transformation width="200" height="150" gravity="custom" crop="thumb" />
              </div>
            </CloudinaryContext>
            <Field
              name="title"
              component={this.renderField}
              label="Title"
              class="footer-title" />
            <Field
              name="body"
              component={this.renderField}
              label="Body"
              class="footer-body" />
            <button type="submit" className=" btn input">Post</button>
          </form>
        </div>
      </div>
    );
  }
}
let form = reduxForm({
  form: 'NewPost'
})(App);

form = connect(state => ({
  posts: state.posts
}), { getPosts, savePost, deletePost })(form);

export default form;

