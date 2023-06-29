import React, {useEffect, useState} from 'react';
import css from './css/Content.module.css';
import ImageList from './ImageList.js';
import { default as savedPosts } from '../posts.json';

export function ContentHooks () {
  const [isLoaded, setIsLoaded] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setTimeout(() => {setIsLoaded(true)}, 2000);
    setPosts(savedPosts.savedPosts);
  }, []);

  return (
    <div className={css.Content}>
    <div className={css.TitleBar}>
        <h1>My Photos</h1>
        <form>
            <label htmlFor="id-author">Search:</label>
            <input id="id-author" placeholder="By Author" onChange={(event) => {
                    let filteredPosts = savedPosts.savedPosts.filter((post) => {
                        return post.name.toLowerCase().includes(event.target.value.toLowerCase())
                        })
                    setPosts(filteredPosts); 
                }} />
        </form>
        <h4>Posts Found: {posts.length}</h4>
    </div>
    <ImageList posts={posts} isLoaded={isLoaded}/>
    </div>
  )
}

export default ContentHooks