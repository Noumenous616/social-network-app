import {maxLengthCreator, required} from "../../utils/validators/valodator";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/controleForms/FormsControls";
import React from "react";

const maxLength30 = maxLengthCreator(30);
const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength30]}
                name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

export const DialogsReduxForm = reduxForm({form: "dialogsAddMessageForm"})(DialogsForm)