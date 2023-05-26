import React from "react";

import { Link } from "react-router-dom";
export function Route1() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-3" >
                        {/* <li className="nav-item active ">
                            <p className="nav-link"><Link to="/hello"style={{color:'white'}}>Task1</Link> </p>
                        </li> */}
                        <li className="nav-item ml-3">
                            <a className="nav-link" href="#"><Link to="/task1" style={{color:'white'}}>Congrats Card</Link></a>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link" href="#"><Link to="/task2" style={{color:'white'}}>SuperOver League</Link></a>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link" href="#"><Link to="/task3" style={{color:'white'}}>Social Butttons</Link></a>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link" href="#"><Link to="/task4" style={{color:'white'}}>Notifications</Link></a>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link" href="#"><Link to="/task5" style={{color:'white'}}>Login</Link></a>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link" href="#"> <Link to="/task6" style={{color:'white'}}>Cards</Link></a>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link" href="#"><Link to="/task7" style={{color:'white'}}>Hooks</Link></a>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link" href="#"><Link to="/task8" style={{color:'white'}}>Fruits</Link></a>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link" href="#"> <Link to="/task9" style={{color:'white'}}>Feedback</Link></a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/fetch" style={{color:'white'}}>Fetch</Link></a>
                        </li> */}
                        <li className="nav-item ml-3">
                            <a className="nav-link" href="#"><Link to="/engcollege" style={{color:'white'}}>FetchDB</Link></a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/userlist" style={{color:'white'}}>userlist</Link></a>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/register" style={{color:'white'}}>register</Link></a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </>
    )
}