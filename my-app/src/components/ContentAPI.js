import React, { Component } from 'react';
import css from './css/Content.module.css';
import ImageListAPI from './ImageListAPI.js';
import axios from 'axios';
import API_KEY from '../secrets'

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      posts: [],
      savedPosts: [],
      httpError: null
    }
  }

  handleAuthorChange = (event) => {
    let filteredPosts = this.state.savedPosts.filter((post) => {
      return post.user.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({
      posts: filteredPosts
    })
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages() {
    let url = 'https://pixabay.com/api/?key=' + API_KEY + '&q=yellow+flowers&image_type=photo'
    axios.get(url)
    .then(response => {
        this.setState ({
            isLoaded: true,
            posts: response.data.hits,
            savedPosts: response.data.hits
        })
    })
    .catch((error) => {
        console.log(error.message)
        this.setState({
            httpError: error.message
        })
    })
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form>
              <label htmlFor="id-author">Search:</label>
              <input id="id-author" placeholder="By Author" onChange={(event) => {this.handleAuthorChange(event)}} />
            </form>
            <h4>Posts Found: {this.state.posts.length}</h4>
        </div>
        <ImageListAPI posts={this.state.posts} isLoaded={this.state.isLoaded}/>
      </div>
    )
  }
}

export default Content