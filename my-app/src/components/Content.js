import React, { Component } from 'react';
import css from './css/Content.module.css';
import { default as savedPosts } from '../posts.json';

export class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
            {savedPosts.savedPosts.map(savedPost => {
                return (
                    <div className={css.SearchItem} key={savedPost.title}>
                        <p>{savedPost.title}</p>
                        <p>{savedPost.name}</p>
                        <img src={savedPost.image} alt="Post"/>
                        <p>{savedPost.description}</p>
                    </div>
                )
            })}
        </div>
      </div>
    )
  }
}

export default Content