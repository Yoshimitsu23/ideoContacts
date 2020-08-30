import React, { useEffect, useState } from 'react';
import { doGetApi } from '../services/apiServices';
import { Link } from "react-router-dom";

function ContactsCards(props) {


    let [ contactsAr, setAr ] = useState([]);
    let count = contactsAr.length;

    useEffect(() => {
        let url = 'https://ideo-contacts.herokuapp.com/contacts'
        doGetApi(url)
            .then(data => {
                setAr(data);
            });
    }, [ setAr ])

    return (

        <div className='container'>
            <div className='justify-content-between align-items-center'>
                <Link to="/add" className='btn btn-outline-primary btn-sm float-right'>Add new contact</Link>
                <h3 className='font-weight-light text-primary font-italic'><u>My Contacts list</u></h3>
                <Link to={{ pathname: '/count', state: { count } }} className='btn btn-link' > Contacts count: {count}</Link>
            </div><br />
            <div className='d-flex row'>
                {
                    contactsAr.map((item, index) => {
                        return (
                            <div key={item._id} className="card col-lg-5 col-md-4 col-sm-12 m-1">
                                <div  >
                                    <h4 className="card-title">{index + 1 + ". " + item.firstName + " " + item.lastName}</h4>
                                    <p className="card-text">@mail : {item.email}</p>
                                    <p className="card-text">phone : {item.phone}</p>
                                    <hr />
                                    <Link to="/edit" className="card-link">Edit</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ContactsCards;