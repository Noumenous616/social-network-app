import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} updateStatus={props.updateStatus} status={props.status}/>
            <MyPostsContainer />

        </div>
    )
}

export default Profile;