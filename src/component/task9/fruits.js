import React from "react";
import { useState } from "react";
import Mango from './m1.jfif';
import Orange from './b1.jfif';
import './fruits.css'

export function Fruits() {
    let [mangoes, setMangoes] = useState(0);
    let [oranges, setOranges] = useState(0);
    return (
        <>
            <div className="container-fluid text-center bg-warning pt-5 pb-5 my-0 round1">
                <div className="container bg-light round1 pt-2 pb-2 ">
                <h3 className="bg-light mt-5">Number of mangoes <span className="text-warning"> { mangoes }</span> & Number of oranges <span className="text-warning">{ oranges }</span></h3>
                <div className="row  col-12 justify-content-around p-5 ">
                    <div className="col-lg-6 ">
                        <img src={Mango} className="round1" /><br />
                        <p><button onClick={() => { setMangoes(mangoes + 1) }} className="round1 bg-success mr-5">Add</button>
                            <button onClick={() => { setMangoes(0) }} className="round1  bg-primary">Reset</button></p>
                    </div>
                    <div className="col-lg-6 round1">
                        <img src={Orange} className="round1" />
                        <p><button onClick={() => { setOranges(oranges + 1) }} className="round1 mr-5 bg-success">Add</button>
                            <button onClick={() => { setOranges(0) }} className="round1  bg-primary">Reset</button></p>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}
