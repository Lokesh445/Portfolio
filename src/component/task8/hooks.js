import React from "react";
import { useState } from "react";

export function Hooks(){
    const[Count,SetCount] = useState(0);
   
    return(
        <>
            <h1 className="p-3 ml-5 text-center">{Count}</h1>
            <div className=" text-center">
            <button onClick={()=>{SetCount(Count+1)}} className="p-2 ml-5 bg-success">Add</button>
            <button onClick={()=>{SetCount(Count-1)}} className="p-2 ml-5 bg-info">Subtract</button>
            <button onClick={()=>{SetCount(0)}} className="p-2 ml-5 bg-danger">Reset</button>
            </div>
        </>
    )
}