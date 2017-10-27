import React from 'react';
import './list.css';
import Task from './Task';

const TaskList = ({tasks}) => {

    return (
        <ul className="task-list">
            {tasks.map((task, i) => {
                return <Task key={i} task={task} />
            })}
        </ul>
    );
}

export default TaskList;