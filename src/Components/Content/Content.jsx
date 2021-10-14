import React from 'react';
import s from './Content.module.css';
import MyPosts from './MyPosts/MyPosts'
const Content = (props) => {
  return (
    <div>
        <div className={s.banner}><img src='https://img.cinemablend.com/filter:scale/quill/a/d/5/b/0/8/ad5b08acea3fa1efdee24dfd128ed2ad75db352d.jpg?fw=1200'></img></div>

      <MyPosts state={props.state}/>
      </div>

  )
}


export default Content;