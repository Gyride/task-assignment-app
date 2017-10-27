import React from 'react';

class Assignee extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: this.props.assignee.name,
            admin: this.props.assignee.admin
        };

        this.isAdmin = this.isAdmin.bind(this);
        this.sendClick = this.sendClick.bind(this);
    }    

    sendClick() {
        let assignee = this.state.name;
        this.props.changeAssignee(assignee);
    }

    isAdmin(assignee) {
        if (assignee.admin) {
            return ": Admin";
        }
    }

    render() {
        return (
            <li onClick={this.sendClick}>{this.state.name}{this.isAdmin(this.state)} </li>
        );
    }
}

export default Assignee;