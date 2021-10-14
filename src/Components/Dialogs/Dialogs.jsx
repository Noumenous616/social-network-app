import React from 'react';
import s from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/controleForms/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/valodator";
import {DialogsReduxForm} from "./DialogsForm";



const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogs + ' ' + s.active}>
            <img src={props.img} />
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}

const Message = (props) => {

    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {

    let state = props.messagesPage;


    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/> );


    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>;


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    { messagesElements }
                </div>
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>

    )
}


export default Dialogs;