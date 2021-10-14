import React from 'react';
import s from './Post.module.css';


const PostItem = (props) => {
  return (
    <div className={s.Post}>
      <img src={props.img} /> <span>Like</span>{props.likeCount}  
      <div className={s.message}>
      {props.message}
      </div>
      
    </div>

  )
}


const Post = (props) => {


  let postElements = props.state.posts.map(post =><PostItem img={post.img} likeCount={post.likeCount} message={post.message} />)

  return (
    
    <div className={s.Posts}>
      {postElements}
      </div>
  
  )
}


export default Post;