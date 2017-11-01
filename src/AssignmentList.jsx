import React from 'react';
import './list.css';
import Assignment from './Assignment';

const AssignmentList = ({assignments, otherAssignees, removeAssignment, editAssignment}) => {
    return (
        <ul className="Assignment-list">
            {assignments.map(function(assignment, i) {
                return <Assignment key={i} assignment={assignment}
                                        otherAssignees={otherAssignees}
                                        removeAssignment={removeAssignment}
                                        editAssignment={editAssignment}/>
            })}
        </ul>
    );
}

export default AssignmentList;