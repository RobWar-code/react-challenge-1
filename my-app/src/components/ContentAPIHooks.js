import React, { useEffect, useState } from 'react';
import css from './css/Content.module.css';
import ImageListAPI from './ImageListAPI.js';
import axios from 'axios';
import API_KEY from '../secrets'

export function ContentAPIHooks() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [posts, setPosts] = useState([])
  const [savedPosts, setSavedPosts] = useState([])
  const [httpError, setHttpError] = useState(null)

  
  const handleAuthorChange = (event) => {
    console.log("event", event.target.value)
    let filteredPosts = savedPosts.filter((post) => {
      return post.user.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setPosts(filteredPosts)
  };

  useEffect (() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    let url = 'https://pixabay.com/api/?key=' + API_KEY + '&q=yellow+flowers&image_type=photo'
    axios.get(url)
    .then(response => {
        setIsLoaded(true)
        setPosts(response.data.hits)
        setSavedPosts(response.data.hits)
    })
    .catch((error) => {
        console.log(error.message)
        setHttpError(error.message)
    })
  }

  return (
    <div className={css.Content}>
    <div className={css.TitleBar}>
        <h1>My Photos</h1>
        <form>
            <label htmlFor="id-author">Search:</label>
            <input id="id-author" placeholder="By Author" onChange={(event) => {handleAuthorChange(event)}} />
        </form>
        <h4>Posts Found: {posts.length}</h4>
    </div>
    <ImageListAPI posts={posts} isLoaded={isLoaded}/>
    </div>
  )

}

export default ContentAPIHooks