import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
  return (
    <div>
    <div className={s.MyPosts}>
    <img src='https://www.kino-teatr.ru/news/5980/62882.jpg' />
    <p>Никита<br></br>Витковский</p>
    </div>
    
    <div>
    
    </div>
    <div className={s.area}>
    <textarea></textarea>
    <button>Add post</button>
    <button>Remove</button>
    </div>
    <div>
    <Post state={props.state}/>
    </div>
    
    
  </div>
    
  )
}


export default MyPosts;