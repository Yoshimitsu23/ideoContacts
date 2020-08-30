import React from 'react';
import { Link } from 'react-router-dom';

function CountContacts(props) {
    return (
        <div className='text-center'>
            <h1 className='display-3'>Count of contacts: <span className='text-secondary'>{props.location.state.count}</span></h1>
            <div className='d-flex align-items-end justify-content-around' style={{ height: '400px' }}>
                <Link to='/add'>Create new contact</Link>
                <Link to='/'>Back to list</Link>
            </div>
        </div>
    );
}

export default CountContacts;