import React from "react";
import {
    LinkedinShareButton,
    LinkedinIcon,
} from "react-share"
import {Link} from "react-scroll"

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
                            <Link smooth={true} to="Home" className="footer-nav">Home</Link>
                            <br />
                            <Link smooth={true} to="About" className="footer-nav">About Me</Link>
                            <br />
                            <Link smooth={true} to="Portfolio" className="footer-nav">Portfolio</Link>
                            <br />
                            <Link smooth={true} to="Contact" className="footer-nav">Contacts</Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}



export default Footer;