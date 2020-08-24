import React from 'react';


function CreateContatct(props) {
    return (
        <div className='container'>
            <form>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" placeholder="name@example.com" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">First name</label>
                    <input type="text" className="form-control" placeholder="John" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Last name</label>
                    <input type="text" className="form-control" placeholder="Doe" />
                </div>
                <div className="form-group">
                    <label for="telNo">Phone</label>
                    <input id="telNo" name="telNo" type="tel" required
                        pattern="[0-9]{3}-[5]{1}[0-9]{1}-[0-9]{7}" className="form-control" placeholder="Enter a telephone number (in the form xxx-xx-xxxxxxx):" />
                    <span class="validity"></span>
                </div>
                <div>
                    <button className='btn btn-outline-primary'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default CreateContatct;