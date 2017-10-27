import React from 'react';
import './form.css'

class AssigneeForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            pass: '',
            admin: false,
            tasks: []
        }

        this.changeName = this.changeName.bind(this);
        this.changePass = this.changePass.bind(this);
        this.changeAdmin = this.changeAdmin.bind(this);        
        this.sendAssignee = this.sendAssignee.bind(this);
    }

    changeName(e) {
        this.setState({name: e.target.value});
    }

    changePass(e) {
        this.setState({pass: e.target.value});
    }

    changeAdmin(e) {
        if ( e.target.checked ) {
            this.setState({admin: true});
        } else {
            this.setState({admin: false});
        }
    }

    sendAssignee(e) {
        e.preventDefault();
        this.props.addAssignee(this.state);
        this.setState({
            name: '',
            pass: '',
            admin: false,
            tasks: []
        });
    }

    render() {
        return (
            <form id="assignee-form">
                <div className="form-group">
                    <label>Username:</label>
                    <input id="name" type="text" value={this.state.name} onChange={this.changeName}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input id="pass" type="password" value={this.state.pass} onChange={this.changePass}/>
                </div>
                <div className="form-group">
                    <span>Admin?</span>
                    <input id="admin" type="checkbox" checked={this.state.admin} onChange={this.changeAdmin} />
                </div>
                <button className="btn" onClick={this.sendAssignee} >Create a new account</button>
            </form>
        );
    }
}

export default AssigneeForm;