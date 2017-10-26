import React from 'react';
import './panel.css';
import Title from './Title';
import TaskForm from './TaskForm';
import AsigneeList from './AsigneeList';
import AsigneeForm from './AsigneeForm';

class AssigneePage extends React.Component {
    render() {
        return (
            <div className="AssigneePage">
                <Title/>

                <div class="panel">
                    <div class="panel-heading">Create a new task!</div>
                    <div class="panel-body">                                  
                        <TaskForm/>
                    </div>
                </div>

                <div class="panel">
                    <div class="panel-heading">Tasks</div>
                    <div class="panel-body">
                        <AssigneeList/>
                        <AssigneeForm/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AssigneePage;