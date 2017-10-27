import React from 'react';
import './list.css';
import Assignee from './Assignee'

const AssigneeList = ({changeAssignee, assignees}) => {
    return (
        <ul className="assignee-list">
            {assignees.map((assignee, i) => {
                return <Assignee key={i} assignee={assignee} changeAssignee={changeAssignee}/>
            })}
        </ul>
    );
}

export default AssigneeList;