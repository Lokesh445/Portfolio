import React,{useEffect, useState} from "react";
import axios from "axios";

export function Mydata(){

    const[details,setDetails] = useState([]);
    useEffect(()=>{
       axios.get('http://localhost:50/engcollege')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    })

    return(
        <>
        <div className="row ">
        {details.map((value,index)=>(
                <>

                    <div className="card col-lg-3">
                    <img src={value.clg_image} className="card-img-top w-20" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{value.clg_name}</h5>
                        <p className="card-text">{value.clg_desc}</p>
                        <h5 className="card-title">{value.course}</h5>
     
                        <a href="#" className="btn btn-primary">view More....</a>
                    </div>
                    </div>
                </>
        ))}
        </div>
        
        </>
    )
}