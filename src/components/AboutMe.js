import React from 'react';
import me from "../me.jpg";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap">
                    <img className="profile-img" src={me} alt="me" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                        Hello, I am Greyson Mainor.  
                        I am a Full-Stack web developer.  
                        Technologies I use are MERN(MongoDB, Express, ReactJS and NodeJS).  
                        I create responsive websites that are displayed on all devices, desktops, and smartphones.  I have a passion for coding and hope to make it my career.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default AboutMe

