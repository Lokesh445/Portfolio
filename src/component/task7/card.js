import React from "react";
import './card.css';
import card1 from './c1.jfif';
import card2 from './c2.jfif';
import card3 from './c3.jfif';
import card4 from './c4.jfif';
function Card(){
    return(
        <>
        <div className="container every bg-info">
        <h2 className="text-center pt-2 text-white">Learn 4.0 Technologies</h2>
        <p className="text-center mt-5 text-white">Get trained by alumni's of IIT and top companies like Amazon,microsoft,intel,Nvidia,Quallcom,etc.Learn directly from proffesionals involved in Product Development</p>
        <div className="container row justify-content-around">
            <div className="col-lg-5 tech1 bg-white mt-4">
                <h4>Data scientist</h4>
                <p>Data scientists analyze and gather a large sets of structured and unstructured data</p>
                <img className="col-lg-5 d-flex ml-auto cimage " src={card1}/>
            </div>
            <div className="col-lg-5 tech2 bg-white mt-4">
                <h4>IOT Developer</h4>
                <p>The role of an IoT Developer/Engineer is a broad umbrella that brings to play multiple. </p>
                <img className="col-lg-5 d-flex  ml-auto cimage"  src={card2}/>
            </div>
            <div className="col-lg-5 tech3 bg-white mt-4">
                <h4>VR Developer</h4>
                <p>A VR developer will work with both. 3D modeling. A VR developer will likely need to work.</p>
                <img className="col-lg-5 d-flex  ml-auto cimage"  src={card3}/>
            </div>
            <div className="col-lg-5 tech4 bg-white mt-4">
                <h4>ML Engineer </h4>
                <p>A machine learning engineer (ML engineer) is a person in IT who focuses on researching, </p>
                <img className="col-lg-5 d-flex  ml-auto cimage"  src={card4}/>
            </div>
        </div>
        </div>
        </>
    );
}
export default Card;