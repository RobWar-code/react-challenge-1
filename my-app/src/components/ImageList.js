import React from 'react';
import css from './css/Content.module.css';

export default function ImageList(props) {
  return (
    <div className={css.SearchResults}>
    {props.posts.map(savedPost => {
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
  )
}
