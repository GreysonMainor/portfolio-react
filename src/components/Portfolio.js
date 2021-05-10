/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import HoundandSeek from "../images/Hound.png";
import PasswordGenerator from "../images/password.png";
import PuppyPlay from "../images/PuppyPlay.png";
import Scheduler from "../images/scheduler.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons"
import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    const openPopupboxHound = () => {
        const content = (
    <>
    <img className="portfolio-image-popupbox" src={HoundandSeek} alt="Hound and Seek" />
    <p>This application allows users to check out different breeds of dogs and find shelters near them for adoption.</p>
    <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://tsanfordgatech.github.io/HoundandSeek/")}> https://tsanfordgatech.github.io/HoundandSeek/ </a>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/GreysonMainor/HoundandSeek")}> https://github.com/GreysonMainor/HoundandSeek </a>
    </>
        )
PopupboxManager.open({ content })
}
const popupboxConfigHound = {
titleBar:{
    enable: true,
    text: "Hound and Seek Project"
},
fadein: true,
fadeInSpeed: 500
}
/*-*/
/*-*/
const openPopupboxPassword = () => {
    const content = (
<>
<img className="portfolio-image-popupbox" src={PasswordGenerator} alt="Password Generator" />
<p>This application allows a user to generate a random password based on their parameters.</p>
<b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://greysonmainor.github.io/week-3-password-generator/")}> https://greysonmainor.github.io/week-3-password-generator/ </a>
<b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/GreysonMainor/week-3-password-generator")}> https://github.com/GreysonMainor/week-3-password-generator </a>
</>
    )
PopupboxManager.open({ content })
}
const popupboxConfigPassword = {
titleBar:{
enable: true,
text: "Automatic Password Generator"
},
fadein: true,
fadeInSpeed: 500
}
/*-*/
/*-*/
const openPopupboxSchedule = () => {
    const content = (
<>
<img className="portfolio-image-popupbox" src={Scheduler} alt="Weekday scheduler" />
<p>This application allows a user to schedule upcoming events for their day.</p>
<b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://greysonmainor.github.io/week-5-JQuery-Schedule/")}> https://greysonmainor.github.io/week-5-JQuery-Schedule/ </a>
<b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/GreysonMainor/week-5-JQuery-Schedule")}> https://github.com/GreysonMainor/week-5-JQuery-Schedule </a>
</>
    )
PopupboxManager.open({ content })
}
const popupboxConfigSchedule = {
titleBar:{
enable: true,
text: "Weekday Scheduler"
},
fadein: true,
fadeInSpeed: 500
}
/*-*/
/*-*/
const openPopupboxPuppy = () => {
    const content = (
<>
<img className="portfolio-image-popupbox" src={PuppyPlay} alt="Puppy Play Date" />
<p>This application allows a user to schedule play dates for their dogs at local parks.</p>
<b>Demo:</b> <a className="hyper-link" onClick={() => window.open(" https://app-puppy-play.herokuapp.com/")}>  https://app-puppy-play.herokuapp.com/ </a>
<b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/dassoumik/project-2")}> https://github.com/dassoumik/PuppyPlay </a>
</>
    )
PopupboxManager.open({ content })
}
const popupboxConfigPuppy = {
titleBar:{
enable: true,
text: "Puppy Play-date Scheduler"
},
fadein: true,
fadeInSpeed: 500
}


return (
    < div className="portfolio-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">Portfolio</h1>
            <div className="image-box-wrapper">
                <div className="portfolio-image-box" onClick={openPopupboxHound}>
                    <img className="portfolio-image" src={HoundandSeek} alt="Hound and seek project" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                <PopupboxContainer {...popupboxConfigHound}/>
                {/*-*/}
                <div className="portfolio-image-box" onClick={openPopupboxPassword}>
                    <img className="portfolio-image" src={PasswordGenerator} alt="Password Generator" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                <PopupboxContainer {...popupboxConfigPassword}/>
                {/*-*/}
                <div className="portfolio-image-box" onClick={openPopupboxPuppy}>
                    <img className="portfolio-image" src={PuppyPlay} alt="Puppy Play Project screenshot" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                    <PopupboxContainer {...popupboxConfigPuppy}/>
                {/*-*/}
                <div className="portfolio-image-box" onClick={openPopupboxSchedule}>
                    <img className="portfolio-image" src={Scheduler} alt="Work Day Scheduler" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                    <PopupboxContainer {...popupboxConfigSchedule}/>
            </div>
        </div>
        
    </div>
)
}

export default Portfolio
