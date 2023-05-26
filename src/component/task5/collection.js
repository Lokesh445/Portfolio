import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamation} from "@fortawesome/free-solid-svg-icons"
import {faCircleCheck,faBell} from "@fortawesome/free-regular-svg-icons"
import './collection.css'


function Collection(){
    return(
    <>
    <div className="text-center ">
        <div className=" message">
            <h1 className="m-0">Notification</h1>
            <div className="color">
            <div className="box1 row bg-primary text-white my-5">
            <FontAwesomeIcon icon={faCircleCheck} className="icon1" />
            <h5 className="pl-3">Information Message</h5>
            </div>
            <div className="box1 row bg-success text-white my-5">
            <FontAwesomeIcon icon={faCircleCheck} className="icon1" />
            <h5 className="pl-3">Success Manager</h5>
            </div>
            <div className="box1 row bg-warning text-white my-5">
            <FontAwesomeIcon icon={faBell} className="icon1" />
            <h5 className="pl-3">Information Message</h5>
            </div>
            <div className="box1 row bg-danger text-white my-5">
            <FontAwesomeIcon icon={faExclamation} className="icon1" />
            <h5 className="pl-3">Error Message</h5>
            </div>
            </div>
        </div>

    </div>
    </>
    );
}
export default Collection;