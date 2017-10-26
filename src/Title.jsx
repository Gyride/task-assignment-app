import React from 'react';
import './title.css';

const Title = ({type}) => {
    return (
        <nav>
            <h1>{type} List</h1>
        </nav>
    );
}

export default Title;