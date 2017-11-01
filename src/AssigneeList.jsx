import React from 'react';
import './list.css';
import Assignee from './Assignee'

const AssigneeList = ({assignees, changeAssignee}) => {
    return (
        <ul className="assignee-list">
            {assignees.map(function(assignee, i) {
                return <Assignee key={i} assignee={assignee}
                                        changeAssignee={changeAssignee}/>
            })}
        </ul>
    );
}

export default AssigneeList;