import React from 'react'
import {createField, Input, Textarea} from "../../../common/controleForms/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css'
import sy from './../../../common/controleForms/FormsControls.module.css'




let ProfileDataForm = (props) => {
    debugger;
    return <form className={s.redactor} onSubmit={props.handleSubmit}>
        <div><button onClick={props.toGoEditMode}>Save</button>
            {props.error && <div className={sy.formSummaryError}>{props.error}</div>}</div>

                <b>Fullname:</b> {createField('Full name', 'fullName', [], Input)}
                <div>
                    <b>Looking for a job: </b> {createField('', 'lookingForAJob', [], Input, 'checkbox')}
                </div>
                <div>
                    <b>My Proffesional skills: </b> {createField('My Proffesional skills', 'lookingForAJobDescription', [], Textarea)}
                </div>

                <div>
                    <b>About me: </b> {createField('About me', 'aboutMe', [], Textarea)}
                </div>
                <div>
                    <b>Contacts </b> : {Object.keys(props.profile.contacts).map(key => {
                    return <div>
                        <b>{key}:{createField(key, 'contacts.' + key, [], Input, )} </b>
                    </div>
                })}
                </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'}) (ProfileDataForm)

export default ProfileDataFormReduxForm;