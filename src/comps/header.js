import React from 'react';


function Header(props) {
    return (
        <div className='jumbotron-fluid text-center bg-dark'>
            <img className='float-left col-2' src='https://www.ideo-digital.com/images/logo-ideo.png' />
            <h1 className='display-1 text-light col-10'>IdeoContacts</h1>
            <hr />
        </div>
    );
}

export default Header;
