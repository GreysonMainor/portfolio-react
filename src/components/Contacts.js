import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="text-center">
            <h1>contact me</h1>
            <p>please fill out forms and i will contact you</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                         />
                           <input
                           id="phone"
                           type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        phone="phone"
                         />
                          <input
                          id="email"
                          type="email"
                        className="form-control"
                        placeholder="Email"
                        email="email"
                         />
                          <input
                          id="subject"
                          type="text"
                        className="form-control"
                        placeholder="Subject"
                        subject="subject"
                         />
                    </div>
                    <div className="col-md-6 col-xs-12">
                    <textarea
                    id="description"
                    type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        phone="phone"
                         ></textarea>
                         <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
