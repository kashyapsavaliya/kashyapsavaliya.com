import React from 'react';
import './index.css';

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

                            </ul>
                        </p>
                    </div>
                </div>
                <div >

                </div>
            </div>
        </div >
    );

};

export default Header;