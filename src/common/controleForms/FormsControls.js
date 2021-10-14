import React from 'react';
import s from './FormsControls.module.css';
import {Field} from "redux-form";


const FormControl = ({input, meta, child, ...props}) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (showError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            {showError && <span>{meta.error}</span>}

        </div>
    )
}


export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>


}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, type, props = {}, text = '') =>
    <Field placeholder={placeholder}
           validate={validators}
           name={name}
           component={component}
           type={type}
           {...props}
           text={text}/>


