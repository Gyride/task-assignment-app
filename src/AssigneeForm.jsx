import React from 'react';
import './form.css'

class AssigneeForm extends React.Component {
    render() {
        return (
            <form action="" id="assignee-form">
                <div class="form-group">
                    <label>Username:</label>
                    <input id="name" type="text"/>
                </div>
                <div class="form-group">
                    <label>Password:</label>
                    <input id="pass" type="password"/>
                </div>
                <div class="form-group">
                    <span>Admin?</span>
                    <input id="admin" type="checkbox"/>
                </div>
                <button class="btn">Create a new account</button>
            </form>
        );
    }
}

export default AssigneeForm;