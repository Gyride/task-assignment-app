import React from 'react';
import './form.css';

class AssignmentForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            assigned: '',
            task: ''
        }

        this.changeAssigned = this.changeAssigned.bind(this);
        this.changeTask = this.changeTask.bind(this);
        this.sendAssignment = this.sendAssignment.bind(this);
    }

    changeAssigned(e) {
        this.setState({assigned: e.target.value});
    }

    changeTask(e) {
        this.setState({task: e.target.value});
    }

    sendAssignment(e) {
        e.preventDefault();
        this.props.addAssignment(this.state);
        this.setState({
            assigned: '',
            task: ''
        });
    }

    render(){
        return (
            <form id="assignment-form">
                <div className="form-group">
                    <label>Assignees: (Separate assignees with ", ")</label>
                    <input id="assignee" type="text" value={this.state.assigned} onChange={this.changeAssigned}/>
                </div>
                <div className="form-group">
                    <label>Assignment:</label>
                    <input id="Assignment" type="text" value={this.state.task} onChange={this.changeTask}/>
                </div>
                <button onClick={this.sendAssignment} className="btn">Create an assignment</button>
            </form>
        );
    }
}

export default AssignmentForm;