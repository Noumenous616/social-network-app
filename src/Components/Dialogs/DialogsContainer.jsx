import React from 'react';
import {onMessageChangeCreator, onUserChangeActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";



/*const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let addMessage = () => {
        props.store.dispatch(onUserChangeActionCreator());
        props.store.dispatch(onMessageChangeCreator());

    }

    let onMessageChange = (text) => {
        let action = onMessageUpdateCreator(text);
        props.store.dispatch(action);
    }


    return <Dialogs  addMessage={addMessage} onMessageChange={onMessageChange} messagesPage={state}/>
}*/



let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
 return {
     addMessage: (newMessageBody) => {
         dispatch(onUserChangeActionCreator());
         dispatch(onMessageChangeCreator(newMessageBody));
     }
 }

}


export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

