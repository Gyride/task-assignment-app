import React from 'react';
import './panel.css';
import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class TaskPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            type: "To Do",
            assignments: [
                {
                    task: "Get Milk",
                    assignee: "Sebastian"
                }
            ]
        };

        this.addTask = this.addTask.bind(this);
    }

    addTask(task) {
        this.setState({ assignments: [...this.state.assignments, task] })
    }

    render() {
        return (
            <div className="TaskPage">
                <Title type={this.state.type} />

                <div className="panel">
                    <div className="panel-heading">Create a new task!</div>
                    <div className="panel-body">                                  
                        <TaskForm addTask={this.addTask} />
                    </div>
                </div>

                <div className="panel">
                    <div className="panel-heading">Tasks</div>
                    <div className="panel-body">
                        <TaskList assignments={this.state.assignments} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskPage;