import React,{useEffect, useState} from "react";

export function Project(){

    const[details,setDetails] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    })

    return(
        <>
        <div className="row ">
        {details.map((value,index)=>(
                <>

                    <div className="card col-lg-3">
                    <img src={value.image} className="card-img-top w-20" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{value.title}</h5>
                        <p className="card-text">{value.description}</p>
                        <h5 className="card-title">{value.price}</h5>
                        <p className="card-text text-danger">{value.category}</p>
                        <a href="#" className="btn btn-primary">view More....</a>
                    </div>
                    </div>
                </>
        ))}
        </div>
        
        </>
    )
}