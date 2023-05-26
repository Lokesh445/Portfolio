import React from "react";
import heart from './images.png'


function FeedNext(){
    return (
        <>
            <div className="feedbodydiv p-5">
                <div className="bg-light">
                    <div className="text-center container p-5">
                        <img src={heart} alt="no images found" width="150"/><br/><br/>
                        <h1 className="p-3">Thank You!</h1>
                        <h6 className="p-3">We will use your feedback to improve our customer support performance</h6>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FeedNext;