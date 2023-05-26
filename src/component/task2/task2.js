import React from "react";
import './task2.css'
import profile from './congrats-card-profile-img.png'
import watch from './congrats-card-watch-img.png'


function Congrats(){
    return(
    <>
      <div class="container_fluid t-2maindiv text-center">
            <h1 className="greet">Congratulations</h1>
            <div className="backGround">
                    <img src={profile} className="img1" alt=""/>
                    <h5>Vishnu Institute of Computer Education And Technology,</h5>
                    <h5>Bhimavaram</h5>
                    <img src={watch} className="img1" alt=""/>
            </div>
        </div>
    </>
    )
    
}
export default Congrats;