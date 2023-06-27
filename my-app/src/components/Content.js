import React, { Component } from 'react';
import css from './css/Content.module.css';
import ImageList from './ImageList.js';
import { default as savedPosts } from '../posts.json';

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      posts: []
    }
  }

  handleAuthorChange = (event) => {
    let filteredPosts = savedPosts.savedPosts.filter((post) => {
      return post.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({
      posts: filteredPosts
    })
  }

  componentDidMount() {
    setTimeout(() => {this.setState({isLoaded: true})}, 2000)
    this.setState({
      posts: savedPosts.savedPosts
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
        <ImageList posts={this.state.posts} isLoaded={this.state.isLoaded}/>
      </div>
    )
  }
}

export default Content