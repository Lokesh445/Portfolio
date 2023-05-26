import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import html from './html.jpg'
import java from './java.jpg'
import mysql from './mongodb.jpg'
import javascriprt from './javascript.jpg'

export function Certificate()
{
    return(
        <>
        
        <div className="container-fluid certification-bg" id="certificate">
        <div className="row pb-5">
        <div className="col-lg-3"/>
                <div className="col-lg-6 ">
                    <p className=" text-center quotescert"><span className="quotes2 ">"</span> Knowledge has to be improved, challenged, and increased constantly,  <br/><span className="quote2certi"> or it vanishes.<span className="quotes2">"</span></span></p>
                    {/* <p className="text-center steve">- Peter Drucker</p> */}
                </div>
            </div>
            <div className="col-lg-3"/>
        

            <h1 className="text-center">Certifications</h1>
            <div className="row">
            <div class="card col-lg-3 mb-2 certificate-card">
                <div class="card-body">
                <img src={mysql} class="container certi1" alt="..."/>
                </div>
                </div>
                

                <div class="card col-lg-3 mb-2 certificate-card">
                <div class="card-body">
                <img src={javascriprt} class="container certi1" alt="..."/>
                </div>
                </div>

                <div class="card col-lg-3 mb-2 certificate-card">
                <div class="card-body">
                <img src={java} class="container certi1" alt="..."/>
                </div>
                </div>

                

                <div class="card col-lg-2 certificate-card">
                <div class="card-body">
                <img src={html}  className="container certi1" alt="..."/>
                </div>
                </div>
                </div>
        </div>
        </>
    );
}