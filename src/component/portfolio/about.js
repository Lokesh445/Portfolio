import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import girl from "./girl.png";


export function PortAbout() {
    return (
        <>
            <div className="container-fluid pb-5 pl-4 portabout" id="about">
                <h1 className="text-center"><b>About Me</b></h1>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row pl-5 pt-5">
                            <div className="col-lg-1" />
                            <div className="col-lg-5 p-4 col-10 dskill">
                                <h3 className="gtitle"><b>Developer Skills</b></h3>
                                <p>As a developer, I possess multiple programming languages, including JavaScript, Python, and Java, allowing me to tackle a wide range of development tasks. My strong foundation in web development is showcased through my proficiency in HTML, CSS, and JavaScript frameworks such as React .</p>
                            </div>
                            <div className="col-lg-1 p-4" />
                            <div className="col-lg-5 p-4 col-10 dskill">
                                <h3 className="gtitle"><b>Backend-Developer</b></h3>
                                <p>I am a backend developer with a strong passion for building scalable and robust web applications. I have extensive experience working with backend technologies such as Node.js with Express framework. I specialize in designing and developing RESTful APIs, integrating with third-party services, and implementing authentication and security measures.</p>

                            </div>
                            <div className="row container-fluid about3 justify-content-center m-5">
                                <div className="col-lg-1" />
                                <div className="col-lg-6 p-4 col-12  dskill">
                                    <h3 className="gtitle"><b>Social Activist</b></h3>
                                    <p>A Mover and Shaker Leaded and took part in many influential social welfare projects through Rotaract club.</p>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="col-lg-4 justify-content-center">
                        <div className="row">

                            <div className="col-lg-12">
                                <img src={girl} className="img-fluid" height="480" width="480" />
                            </div>

                        </div>
                        <div className="col-lg-1"></div>

                    </div>
                    <div className="col-lg-12 text-center">
                        <h2 className="abtquote"><b>Multi-talented. Intuitive. Dedicated.</b></h2>

                    </div>
                </div>


            </div>
        </>
    );
}

