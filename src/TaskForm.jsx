import React from 'react';
import './form.css';

class TaskForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            task: '',
            assignee: ''
        }

        this.changeTask = this.changeTask.bind(this);
        this.changeAssignee = this.changeAssignee.bind(this);
        this.sendTask = this.sendTask.bind(this);
    }

    changeAssignee(e) {
        this.setState({assignee: e.target.value});
    }

    changeTask(e) {
        this.setState({task: e.target.value});
    }

    sendTask(e) {
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            task: '',
            assignee: ''
        });
    }

    render(){
        return (
            <form id="task-form">
                <div className="form-group">
                    <label>Assignee:</label>
                    <input id="assignee" type="text" value={this.state.assignee} onChange={this.changeAssignee}/>
                </div>
                <div className="form-group">
                    <label>Task:</label>
                    <input id="task" type="text" value={this.state.task} onChange={this.changeTask}/>
                </div>
                <button onClick={this.sendTask} className="btn">Assign a task</button>
            </form>
        );
    }
}

export default TaskForm;