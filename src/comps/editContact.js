import React from 'react';
import { Link } from "react-router-dom";

function EditContatct(props) {

    return (
        <div className='mt-5'>
            <div className='container'>
                <h2 className='display-4'>Edit contact</h2>
                <form>
                    <div className="form-group">
                        <label>First name</label>
                        <input id="id_firstName" type="text" className="form-control" placeholder="John" />
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input id="id_lastName" type="text" className="form-control" placeholder="Doe" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input id="id_email" type="email" className="form-control" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label >Phone</label>
                        <input id="id_phone" type="tel" required pattern="[0-9]{3}[5]{1}[0-9]{1}[0-9]{7}" className="form-control" placeholder="Enter phone number (in the form xxx-xx-xxxxxxx):" />
                        <span className="validity"></span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className='btn btn-outline-primary'>Save changes</button>
                        <Link to="/" className='btn btn-outline-dark'>My contacts</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditContatct;