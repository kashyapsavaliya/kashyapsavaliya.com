import React from 'react';
import './portfolio.css';
import Ethoca from "./images/eth-mastercard.jpg";
import Chip8 from "./images/chip8.png";
import Gallery from "./images/gallery.jpg"

export const Portfolio = () => {
    return (
        <div className="portfolio container">

            <h3 className="lineTitle">WORK</h3>
            <div className="line"></div>

            <div className="row rowInfo">
                <div className="col-md-6">
                    <div className="text">
                        <h2 className="pTitle">Mastercard-Ethoca · Software Developer Intern</h2>
                        <div id="smallDivider2"></div>
                        <h4>Jan - Dec 2019</h4>
                        <p>I participated in Mastercard-Ethoca software developer internship program in 2019. Ethoca is the global network of banks and merchants driving a simple, trusted consumer payment experience through collaboration. Ethoca later got acquired by Mastercard.</p>
                    </div>
                </div>
                <div className="col-md-6 displayR">
                    <a href="https://www.ethoca.com/" className="hvr-grow">
                        <div className="pic">
                            <img src={Ethoca} height="250px" width="450px" alt="ethoca"></img>
                        </div>
                    </a>
                </div>
            </div>
            <h3 className="animated fadeIn lineTitle">CODE + DESIGN</h3>
            <div className="line"></div>
            <div className="row">
                <div className="col-md-6">
                    <div className="text">
                        <h2 className="pTitle">CHIP-8 Emulator</h2>
                        <div id="smallDivider2"></div>
                        <h4>Winter 2019</h4>
                        <p>Chip8 is an emulator written in Java cable of running any 8 bit game roms. The Chip 8 actually never was a real system, but more like a virtual machine (VM) developed in the 70’s by Joseph Weisbecker. Games written in the Chip 8 language could easily run on systems that had a Chip 8 interpreter.</p>
                    </div>
                </div>
                <div className="col-md-6 displayR">
                    <a href="https://www.github.com" className="hvr-grow">
                        <div className="pic">
                            <img src={Chip8} height="250px" width="450px" alt="chip8"></img>
                        </div>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="text">
                        <h2 className="pTitle">Gallery</h2>
                        <div id="smallDivider2"></div>
                        <h4>Summer 2020</h4>
                        <p>Gallery is a visual portfolio generator capable of spitting out specific format to your liking for your albums. Gallery is a work in progress of mine with the goal of having custom layout for my photographs and having a simple setup.</p>
                    </div>
                </div>
                <div className="col-md-6 displayR">
                    <a href="https://www.github.com" className="hvr-grow">
                        <div className="pic">
                            <img src={Gallery} height="250px" width="450px" alt="chip8"></img>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;