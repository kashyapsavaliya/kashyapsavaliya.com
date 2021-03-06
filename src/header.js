import React from 'react';
import './header.css';
import resume from "./images/file.svg";
import linkedin from "./images/linkedin.svg";
import twitter from "./images/twitter.svg";
import github from "./images/github.svg";
import blog from "./images/blog.svg"
import mountain from "./images/mountain.png";

export const Header = () => {
    return (
        <div className={"header container"} >
            <div className={"row"}>
                <div id={"wrapper"} className={"col-md-12"}>
                    <div className={"text"}>
                        <div className={"title"}>KASHYAP SAVALIYA</div>
                        <div className={"secondaryTitle"}>Developer. Designer. Student</div>
                        <div className={"smallDivider"}></div>
                        <p className={"description"}>
                            Hey, my name is Kashyap, a Software Developer from Toronto, Canada. I am currently in my final year at York University, where I am majoring in Computer Science! I previously interned at Mastercard - Ethoca.
                        <ul className={"socialMediaButtons"}>
                                <li id="one" className="buttons hvr-grow2"><a href="KashyapResume.pdf" id="resume" className="hvr-grow"><img src={resume} height="28px" alt="resume"></img></a></li>
                                <li id="two" className="buttons hvr-grow2"><a href="https://www.github.com/kashyapsavaliya"><img src={github} height="28px" alt="github"></img></a></li>
                                <li id="three" className="buttons hvr-grow2"><a href="https://www.linkedin.com/in/kashyapsavaliya/"><img src={linkedin} height="28px" alt="linkedin"></img></a></li>
                                <li id="four" className="buttons hvr-grow2"><a href="https://www.twitter.com/kashyapcode"><img src={twitter} height="28px" alt="twitter"></img></a></li>
                                <li id="five" className="buttons hvr-grow2"><a href="https://www.linkedin.com/in/kashyapsavaliya/"><img src={blog} height="28px" alt="blog"></img></a></li>
                            </ul>
                        </p>
                    </div>
                </div>
                <img src={mountain} height="400px" className="mountain" alt="mountain"></img>
                <div >

                </div>
            </div>
        </div >
    );

};

export default Header;