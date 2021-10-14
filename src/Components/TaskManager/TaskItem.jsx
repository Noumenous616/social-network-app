import React, {useContext} from 'react';
import s from './TaskManager.module.css';
import {Context} from "./Context"

let TaskItem = ({title, id, completed}) => {


    const {dispatch} =  useContext(Context)
    const cls = ['']


    if (completed) {
        cls.push(s.completed)
    }
    return (
        <li className={cls.join('')}>


            <label>
                <input className={s.checkboxOk} type='checkbox'
                       checked={completed}
                       onClick={() => dispatch({
                           type: 'toggle',
                           payload: id
                       })}
                />
                <spanc className={s.titleInput}> {title} </spanc>
                <button className={s.btnRed} onClick={() => dispatch({
                    type: 'remove',
                    payload: id
                })}>Del</button>
            </label>
        </li>


    )
}

export default TaskItem;