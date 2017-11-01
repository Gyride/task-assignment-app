import React from 'react';

const Assignee = ({assignee, changeAssignee}) => {
    return (
        <li>
            <span onClick={() => changeAssignee(assignee)}>{assignee.name}</span>
        </li>
    );
}

export default Assignee;