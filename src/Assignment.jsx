import React from 'react';

class Assignment extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            assignment: this.props.assignment,
            editing: false
        }

        this.changeAssigned = this.changeAssigned.bind(this);        
        this.changeTask = this.changeTask.bind(this);
        this.edit = this.edit.bind(this);
        this.sendEdit = this.sendEdit.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }

    changeAssigned(e) {
        this.setState({ assignment: {
                ...this.state.assignment,
                assigned: e.target.value
            }
        });
    }

    changeTask(e) {
        this.setState({ assignment: {
                ...this.state.assignment,
                task: e.target.value
            }
        });
    }

    edit() {
        this.setState({
            assignment: {
                ...this.state.assignment,
                assigned: this.state.assignment.assigned.join(",")
            },
            editing: !this.state.editing
        })
    }

    sendEdit(e) {
        e.preventDefault();
        this.props.editAssignment(this.props.assignment, this.state.assignment);
        this.componentWillReceiveProps(this.props);
        this.edit();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.assignment !== this.props.assignment) {
            this.setState({assignment: nextProps.assignment});
        }
    }

    render() {
        if ( this.state.editing ) {
            return (
                <form id="assignment-form">
                    <div className="form-group">
                        <label>Assignees: (Separate assignees with ", ")</label>
                        <input id="assignee" type="text" value={this.state.assignment.assigned} onChange={this.changeAssigned}/>
                    </div>
                    <div className="form-group">
                        <label>Assignment:</label>
                        <input id="assignment" type="text" value={this.state.assignment.task} onChange={this.changeTask}/>
                    </div>
                    <button onClick={(e) => this.sendEdit(e)} className="btn">Edit the assignment</button>
                </form>
            );
        } else {
            return (
                <li>
                    <span>{this.state.assignment.task}{this.props.otherAssignees(this.state.assignment)}</span>
                    <div>
                        <button onClick={() => this.edit()} className="btn">Edit</button>
                        <button onClick={() => this.props.removeAssignment(this.state.assignment)} className="btn">Delete</button>
                    </div>
                </li>
            );
        }
    }
}

export default Assignment;