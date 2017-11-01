import React from 'react';
import './panel.css';
import AssigneeForm from './AssigneeForm';
import AssigneeList from './AssigneeList';
import AssignmentForm from './AssignmentForm';
import AssignmentList from './AssignmentList';

class AssignmentManager extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            assignees: [
                {
                    name: "Sebastian",
                    pass: "gyride"
                },
                {
                    name: "Eddy",
                    pass: "dumb"
                }
            ],
            assignments: [
                {
                    assigned: ["Sebastian", "Eddy"],
                    task: "Code"
                },
                {
                    assigned: ["Sebastian"],
                    task: "Slap the Bass"
                }
            ],
            currentAssignee: "Sebastian"
        }

        this.addAssignee = this.addAssignee.bind(this);
        this.changeAssignee = this.changeAssignee.bind(this);
        this.addAssignment = this.addAssignment.bind(this);
        this.removeAssignment = this.removeAssignment.bind(this);
        this.editAssignment = this.editAssignment.bind(this);
        this.currentAssignments = this.currentAssignments.bind(this);
        this.otherAssignees = this.otherAssignees.bind(this);        
        this.userExists = this.userExists.bind(this);
    }

    addAssignee(assignee) {
        if ( !this.userExists(assignee.name) ) {
            this.setState({
                assignees: [...this.state.assignees, assignee]
            });
        } else {
            alert("That user already exists");
        }
    }

    changeAssignee(assignee) {
        this.setState({
            currentAssignee: assignee.name
        });
    }

    addAssignment(assignment) {
        assignment.assigned = assignment.assigned.split(",");
        this.setState({
            assignments: [...this.state.assignments, assignment]
        });
    }

    removeAssignment(assignment) {
        this.setState({
            assignments: this.state.assignments.filter( (stateAssignment) => {
                return assignment.task !== stateAssignment.task;
            })
        });
    }

    editAssignment(oldAssignment, newAssignment) {
        newAssignment.assigned = newAssignment.assigned.split(",");
        let assignmentStateClone = this.state.assignments.slice(0);
        let i = assignmentStateClone.indexOf( assignmentStateClone.find( (assignment) => {
            return assignment.task === oldAssignment.task 
        }));
        assignmentStateClone[i] = newAssignment;

        this.setState({
            assignments: assignmentStateClone
        });
    }

    currentAssignments() {
        let currentAssignments = this.state.assignments.filter( (assignment) => {
            return assignment.assigned.includes(this.state.currentAssignee)
        });

        return currentAssignments;
    }

    otherAssignees(assignment) {
        let assignmentClone = Object.assign({}, assignment);
        assignmentClone.assigned = assignmentClone.assigned.filter( (assignee) => {
            return assignee !== this.state.currentAssignee;
        });

        if (assignmentClone.assigned.length > 0) {
            var assigneesString = assignmentClone.assigned.join(',');
            return '/Other Assignees: ' + assigneesString;
        }
    }

    userExists(name) {
        return this.state.assignees.some( (assignee) => assignee.name === name );
    }

    render() {
        console.log(this.state.assignments);
        return (
            <div className="AssignmentManager">
                <nav>
                    <h1>Assignment Manager</h1>
                </nav>

                <div className="panel">
                    <div className="panel-heading">Add a new user!</div>
                    <div className="panel-body">
                        <AssigneeForm addAssignee={this.addAssignee}/>
                    </div>
                </div>

                <div className="panel">
                    <div className="panel-heading">Users</div>
                    <div className="panel-body">
                        <AssigneeList assignees={this.state.assignees}
                                    changeAssignee={this.changeAssignee}/>
                    </div>
                </div>

                <div className="panel">
                    <div className="panel-heading">Assign a new Assignment!</div>
                    <div className="panel-body">
                        <AssignmentForm addAssignment={this.addAssignment}/>
                    </div>
                </div>

                <div className="panel">
                    <div className="panel-heading">{this.state.currentAssignee}'s Assignments</div>
                    <div className="panel-body">
                        <AssignmentList assignments={this.currentAssignments()}
                                        otherAssignees={this.otherAssignees}
                                        removeAssignment={this.removeAssignment}
                                        editAssignment={this.editAssignment}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AssignmentManager;