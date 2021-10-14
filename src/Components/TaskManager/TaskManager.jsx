import React, {useEffect, useReducer, useState} from 'react';
import s from './TaskManager.module.css';
import TaskList from "./TaskList";
import {Context} from "./Context"
import reducer from './task-reducer'


const TaskManager = () => {

    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('task')));
    /*const [task, setTask] = useState([]);*/

    const [taskTitle, setTaskTitle] = useState('')

    /*useEffect( () => {
       const raw = localStorage.getItem('task') || []
        setTask(JSON.parse(raw))

    }, [])*/

    useEffect( () => {
        localStorage.setItem('task', JSON.stringify(state))

    }, [state] )

    let addTask = (event) => {
        if (event.key === 'Enter') {
            dispatch({
                type:'add',
                payload: taskTitle,
                completed: false
            })
            setTaskTitle('')
        }
    }

    /*const removeTask = (id) => {
        setTask(task.filter(task => {
            return task.id !== id
        }))
    }

    const toggleTask = (id) => {
        setTask(task.map(task => {
            if (task.id === id) {
                task.completed = !task.completed
            }
            return task

        }))
    }*/

    return (
        <Context.Provider value={{
            dispatch
        }}>
            <div className={s.sectionBorder}>
                <div className={s.sectionName}>
                    Task manager for your Day
                </div>
                <div>
                    <input value={taskTitle}
                           className=''
                           type='text'
                           onChange={event => setTaskTitle(event.target.value)}
                           onKeyPress={addTask}
                           placeholder="Task Name and Enter"
                    />
                </div>
                <div>
                    <TaskList task={state}/>
                </div>
            </div>
        </Context.Provider>

            );
            }

export default TaskManager;