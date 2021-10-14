import React, {useState} from 'react';
import TaskItem from "./TaskItem";

let TaskList = ({task}) => {
    return (
        <ul>
            {task.map(item => <TaskItem key={task.id} {...item} />)}
        </ul>
    )

}

export default TaskList;