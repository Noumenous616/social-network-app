import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";
import userPhoto from '../../../common/img/photo.jpeg'
import {Contacts} from "./Contacts";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = (props) => {
    const onSubmit = (formData) => {
         props.saveProfile(formData).then(() => {
             setEditMode(false)
         })
    }
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.userPage}>
            <div >

            </div>
            <div className={s.userSettings}>
                {editMode ? <ProfileDataForm profile={props.profile} initialValues={props.profile} onSubmit={onSubmit} /> :
                    <ProfileData  toGoEditMode={() => {setEditMode(true)}}
                                  profile={props.profile} isOwner={props.isOwner}
                                  updateStatus={props.updateStatus}
                                  status={props.status}
                                  savePhoto={props.savePhoto}/>}
            </div>
            <div className={s.banner}>
                <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'/>
            </div>

        </div>)}

let ProfileData = (props) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return <div className={s.descriptionBlock}>
        { props.isOwner && <div><button onClick={props.toGoEditMode}>Edit</button></div>}
        <div>
            <img src={props.profile.photos.large || userPhoto} className={s.avatar}/>
            {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <div>
                <b>Fullname:</b> {props.profile.fullName}
                <div>
                    <b>Looking for a job: </b> {props.profile.lookingForAJob ? 'yes' : 'no'}
                </div>
                <div>
                    <b>My Proffesional skills: </b> {props.profile.lookingForAJobDescription}
                </div>
                <div>
                    <b>About me: </b> {props.profile.aboutMe}
                </div>
                <div>
                    <ProfileStatusHooks updateStatus={props.updateStatus} status={props.status}/>
                </div>
                <div>
                    <b>Contacts </b> : {Object.keys(props.profile.contacts).map(key => {
                    return <Contacts  key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}
                </div>
            </div>
        </div>
    </div>
}

export default ProfileInfo;