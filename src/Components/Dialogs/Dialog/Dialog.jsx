/*
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';




const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.item}>
      <NavLink to={path}><img src={props.img} />{props.name}</NavLink>
      
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.messages}>
     {props.message} 
    </div>
  )
} 

const Dialog = (props) => {

    let addMessage = () => {

    }

let dialogElements = props.state.dialogs.map(dialog =><DialogItem img={dialog.img} name={dialog.name} id={dialog.id} />)
let messageElements = props.state.messages.map(message =><Message message={message.message} />)

let newMessageElement = React.createRef();



let onMessageChange = () => {
  let text = newMessageElement.current.value;
  props.newMessageText(text);
}

  return (
    
    <div className={s.dialog}>
      <div>
      {dialogElements}
      </div>
      <div>
      {messageElements}
      </div>
      <div>
      <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}></textarea>
      </div>
      <div>
        <button onClick={addMessage}>Добавить сообщенине</button>
      </div>
    </div>
  )
}


export default Dialog;*/
