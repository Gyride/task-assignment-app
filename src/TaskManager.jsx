import React from 'react';
import './panel.css';
import AssigneeForm from './AssigneeForm';
import AssigneeList from './AssigneeList';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class TaskManager extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            assignees: [
                {
                    name: "Sebastian",
                    pass: "Gyride",
                    admin: true,
                    tasks: ["Code", "Slap the Bass"]
                }
            ],
            currentAssignee: "Sebastian"
        };

        this.addAssignee = this.addAssignee.bind(this);
        this.currentAssigneeTasks = this.currentAssigneeTasks.bind(this);
        this.changeAssignee = this.changeAssignee.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask(assignment) {
        this.setState(function(prevState, props){
            const assignee = this.state.assignees.find(assignee => assignee.name === assignment.assignee);

            if ( assignee ) {
                const task = assignment.task;
                const i = this.state.assignees.indexOf(assignee);

                const newState = Object.assign({}, prevState);
                newState.assignees[i].tasks.push(task);

                return {
                    newState
                }
            } else {
                alert("That user does not exist")
                return {
                    
                }
            }
        });
    }

    addAssignee(assignee) {
        this.setState(function(prevState, props) {
            
            function userExists(assignee) {
                for( var i = 0; i < prevState.assignees.length; i++) {
                    if ( prevState.assignees[i].name === assignee.name ) {
                        return true;
                    }
                }
                return false;
            }

            if ( userExists(assignee) ) {
                alert("That username is already in use");
                return {
                    ...prevState
                }
            } else {
                return {
                    assignees: [...this.state.assignees, assignee]
                }
            }
        });
    }

    changeAssignee(assignee) {
        this.setState({
            currentAssignee: assignee
        })
    }

    currentAssigneeTasks() {
        return this.state.assignees.find(asignee => asignee.name === this.state.currentAssignee).tasks;
    }

    render() {
        return (
            <div className="TaskManager">
                <nav>
                    <h1>Task Manager</h1>
                </nav>

                <div className="panel">
                    <div className="panel-heading">Add a new user!</div>
                    <div className="panel-body">
                        <AssigneeForm addAssignee={this.addAssignee} />
                    </div>
                </div>

                <div className="panel">
                    <div className="panel-heading">Users</div>
                    <div className="panel-body">
                        <AssigneeList changeAssignee={this.changeAssignee} assignees={this.state.assignees} />
                    </div>
                </div>

                <div className="panel">
                    <div className="panel-heading">Assign a new task!</div>
                    <div className="panel-body">                                  
                        <TaskForm addTask={this.addTask} />
                    </div>
                </div>

                <div className="panel">
                    <div className="panel-heading">{this.state.currentAssignee}'s tasks</div>
                    <div className="panel-body">
                        <TaskList tasks={this.currentAssigneeTasks()} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskManager;