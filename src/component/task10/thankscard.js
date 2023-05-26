import React from "react";
import Sad from './sasd.jfif'
import None from './smile.png'
import Happy from './smilen.png';
import './thankscard.css';
import { Link } from "react-router-dom";

function FeedBack(){
    return (
        <>
            <div className="feedbodydiv p-5">
                <div className="bg-light">
                    <h1 className="text-center p-5">How satisfied are you with our customer support performance?</h1>
                    <div className="row justify-content-center p-5">
                        <div className="col-lg-3 p-5 text-warning feedfont text-center">
                        <Link to="/task9.1"><img src={Sad} className="feedimage" alt="no images found" width="120"/><br/>
                            <label className="text-dark feedlabel">SAD</label></Link>
                        </div>
                        <div className="col-lg-3 p-5 text-warning feedfont">
                            <Link to="/task9.1"><img src={None} className="feedimage" alt="no images found" width="125"/><br/>
                            <label className="text-dark feedlabel">NONE</label></Link>
                        </div>
                        <div className="col-lg-3 p-5 text-warning feedfont">
                            <Link to="/task9.1"><img src={Happy} className="feedimage" alt="no images found" width="120"/><br/>
                            <label className="text-dark feedlabel">HAPPY</label></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeedBack;