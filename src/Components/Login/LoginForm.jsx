import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../../common/controleForms/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/valodator";
import s from './../../common/controleForms/FormsControls.module.css'



const maxLength40 = maxLengthCreator(40);
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                {createField('Email', 'email', [required], Input) }
            </div>
            <div>
                {createField('password', 'password', [required], Input, 'password' ) }
            </div>
            <div>
                {createField('', 'rememberMe', [required], Input, 'checkbox' ) }
                 remember me
            </div>
            {captchaUrl && <img src={captchaUrl} />}
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}
export const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)

