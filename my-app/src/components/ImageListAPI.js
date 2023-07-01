import React from 'react';
import css from './css/Content.module.css';
import Loader from './Loader.js'

export default function ImageList(props) {
  return (
    <div className={css.SearchResults}>
    {props.isLoaded ? (
      props.posts.map(savedPost => {
          return (
              <div className={css.SearchItem} key={savedPost.id}>
                  <p>Artwork Type: {savedPost.type}</p>
                  <p>Artist: {savedPost.user}</p>
                  <img src={savedPost.webformatURL} alt="Post"/>
                  <p>Tags {savedPost.tags}</p>
              </div>
          )
        })
    ):
    (
      <Loader />
    )
    }
    </div>
  )
}
