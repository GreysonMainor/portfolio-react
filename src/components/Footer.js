import React from "react";
import {
    LinkedinShareButton,
    LinkedinIcon,
} from "react-share"


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <a href="gbmainor98@outlook.com">gbmainor98@outlook.com</a>
                        </div>
                        <div className="d-flex">
                            <a href="tel:770-825-2800">(770) 825-2800</a>
                        </div>
                        <div className="d-flex">
                            <a href="https://github.com/GreysonMainor">Github</a>
                        </div>
                        <div className="d-flex">
                            <a href="https://www.linkedin.com/in/greysonmainor/">LinkedIn</a>
                        </div>

                      
                    </div>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-6">
                    <div className="row">
                        <div className="col">
                            <a className="footer-nav">Home</a>
                            <br />
                            <a className="footer-nav">About Me</a>
                            <br />
                            <a className="footer-nav">Portfolio</a>
                            <br />
                            <a className="footer-nav">Contacts</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}



export default Footer;