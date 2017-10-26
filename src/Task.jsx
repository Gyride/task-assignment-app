import React from 'react';

const Task = ({assignment, key}) => {
    return (
        <li key={key}>{assignment.assignee}: {assignment.task}</li>
    );
}

export default Task;