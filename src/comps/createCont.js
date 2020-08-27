import React from 'react';


function CreateContatct(props) {

    let sendForm = (event) => {

        event.preventDefault();

        let bodyData = {
            firstName: event.target.id_firstName.value,
            lastName: event.target.id_lastName.value,
            phone: event.target.id_phone.value,
            email: event.target.id_email.value,
        }

        let url = "https://ideo-contacts.herokuapp.com/contacts/add";

        fetch(url, {
            method: "POST",
            body: JSON.stringify(bodyData),
            headers: {
                'content-type': "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                if (data) {
                    console.log(data);
                }
                else {
                    alert("There is already prod in this name")
                }
            })


    }

    return (
        <div className='mt-5'>
            <div className='container'>
                <form onSubmit={sendForm}>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">First name</label>
                        <input id="id_firstName" type="text" className="form-control" placeholder="John" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Last name</label>
                        <input id="id_lastName" type="text" className="form-control" placeholder="Doe" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input id="id_email" type="email" className="form-control" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label for="telNo">Phone</label>
                        <input id="id_phone" type="tel" required pattern="[0-9]{3}-[5]{1}[0-9]{1}-[0-9]{7}" className="form-control" placeholder="Enter phone number (in the form xxx-xx-xxxxxxx):" />
                        <span class="validity"></span>
                    </div>
                    <div>
                        <button className='btn btn-outline-primary'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateContatct;