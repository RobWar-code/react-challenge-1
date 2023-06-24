import React from 'react';
import css from './css/Content.module.css';
import Loader from './Loader.js'

export default function ImageList(props) {
  return (
    <div className={css.SearchResults}>
    {props.isLoaded ? (
      props.posts.map(savedPost => {
          return (
              <div className={css.SearchItem} key={savedPost.title}>
                  <p>{savedPost.title}</p>
                  <p>{savedPost.name}</p>
                  <img src={savedPost.image} alt="Post"/>
                  <p>{savedPost.description}</p>
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
