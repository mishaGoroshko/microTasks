import React from 'react';
import {TaskType} from "./TodoList";

// type TaskPropsType = {
//     id: number
//     title: string
//     isDone: boolean
// }
type TaskPropsType = TaskType & {
    removeTask: (taskID: number) => void
}

const Task = (props: TaskPropsType) => {
    return (
        <li>
            <input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>
            <button onClick={() => props.removeTask(props.id)}>x</button>
        </li>
    );
};

export default Task;