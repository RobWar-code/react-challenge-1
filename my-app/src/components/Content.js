import React, { Component } from 'react';
import css from './css/Content.module.css';
import ImageList from './ImageList.js';
import { default as savedPosts } from '../posts.json';

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    }
  }

  componentDidMount() {
    setTimeout(() => {this.setState({isLoaded: true})}, 2000)
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
        </div>
        <ImageList posts={savedPosts.savedPosts} isLoaded={this.state.isLoaded}/>
      </div>
    )
  }
}

export default Content