import React from 'react';
import './list.css';
import Task from './Task'

const TaskList = ({assignments}) => {

    return (
        <ul className="task-list">
            {assignments.map((assignment, i) => {
                return <Task key={i} assignment={assignment} />
            })}
        </ul>
    );
}

export default TaskList;