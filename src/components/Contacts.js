import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import emailjs from "emailjs-com"
import {useForm} from "react-hook-form";

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const{ register, handleSubmit, errors } = useForm();

const serviceID = "service_ID";
const templateID = "template_ID";
const userID = "user_YoBfJGvjkfqS01qefLswu";

const onSubmit = (data, r) => {
    sendEmail(
        serviceID,
         templateID,
         {
             name: data.name,
             phone: data.phone,
             email: data.email,
             subject: data.subject,
             description: data.description
         },
         userID
         )
         r.target.reset();
}

    function sendEmail(serviceID, templateID, variables, userID) {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
              setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
          }).catch(err => console.error(`something went wrong ${err}`));
      }
    

    return (
        <div className="contacts">
            <div className="text-center">
            <h1>contact me</h1>
            <p>Please fill out the form below and I will contact you as soon as possible.</p>
            <span className="success-message"></span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                         />
                         <div className="line"></div>
                         <span className="error-message">
                         </span>
                           <input
                           type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                         />
                         <div className="line"></div>
                          <input
                          type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                         />
                         <div className="line"></div>
                          <input
                          type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                         />
                    </div>
                    <div className="col-md-6 col-xs-12">
                    <textarea
                    type="text"
                        className="form-control"
                        placeholder="Description"
                        name="description"
                         ></textarea>
                         <div className="line"></div>
                         <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>

                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
