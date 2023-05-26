import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./portfolio.css";
import propic from "./img.jpg";


export function PortHome() {
    return (<>




        <div className="porthomebg container-fluid" id="home">

            <div className="container">
                <div className="row p-5">
                    <div className="col-lg-1" />
                    <div className="col-lg-4 col-4">
                        <img className=" propic rounded-circle" src={propic} height="230" width="230" />
                    </div>
                    <div className="col-lg-6 text-left col-12 text-white name2">
                        <p><span className="iam">I'm</span><br /><span className="name1"><b> LOKESH</b></span></p>
                        <p className="homecon">" Not the average but an ambitiously driven web developer "</p>

                        <button className="butn">
                            <a className="ar-butn text-dark" href="https://drive.google.com/file/d/19MIIXbUtgnIThQAqReBDG1P2GoFQ6SOK/view?usp=sharing" download target="_blank">Download CV <br />
                            </a>
                        </button>

                    </div>

                    <div className="col-lg-2" />

                </div>
            </div>

        </div>



    </>);
}