import React, { useEffect, useState } from 'react';
import { doGetApi } from '../services/apiServices';


function ContactsCards(props) {


    let [ contactsAr, setAr ] = useState([]);

    useEffect(() => {
        let url = 'https://ideo-contacts.herokuapp.com/contacts'
        doGetApi(url)
            .then(data => {
                setAr(data);
            });
    }, [ setAr ])

    return (
        <div className='container'>
            <div>
                <h3 className='text-left font-weight-light text-primary font-italic'><u>My Contact list</u></h3>
                <br />
                <hr />
            </div>
            <div className='d-flex row'>
                {
                    contactsAr.map(item => {
                        return (
                            <div key={item._id} className="card col-lg-3 col-md-4 col-sm-12 m-1">
                                <div className="card-body">
                                    <h4 className="card-title">{item.firstName + " " + item.lastName}</h4>
                                    <p className="card-text">@mail : {item.mail}</p>
                                    <p className="card-text">phone : {item.phone}</p>
                                    <hr />
                                    <a href="#!" className="card-link">Card link</a>
                                    <a href="#!" className="card-link">Another link</a>
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

{/*  */ }