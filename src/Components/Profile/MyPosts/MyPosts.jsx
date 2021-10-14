import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/valodator";
import {Textarea} from "../../../common/controleForms/FormsControls";


const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {
    console.log('render yoy')
    let postElements = props.posts
        .map(p => <Post message={p.message} likeCount={p.likesCount}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostBody);
    }


    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <ProfileReduxForm onSubmit={addNewPost}/>
            {postElements}
        </div>
    )
})

const profileTextForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name="newPostBody" placeholder="Enter your message"
                           validate={[required, maxLength10]}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>


        </div>
    )
}

const ProfileReduxForm = reduxForm({form: "ProfileAddPostForm"})(profileTextForm)

export default MyPosts;