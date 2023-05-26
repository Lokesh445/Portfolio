import React,{useEffect, useState} from "react";
import axios from "axios";



export function UserList(){
    
    const[list,setList] = useState([]);
    useEffect(()=>{
       axios.get('http://localhost:8080/auth/getAll')
        .then((res)=>{
            setList(res.data.jData)
        })
        
    },[])

    

    // console.log(value.is_Active)

    return(
        
        <>
        <thead  style={{border: '2px solid black'}}>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>emailId</th>
                        <th>phoneNumber</th>
                        <th>dateOfBirth</th>
                        <th>gender</th>
                        <th>password</th>
                        <th>updatedDate</th>
                        <th>is_Active</th>
                        <th>CreatedDate</th>
                       
                        </thead>
                        
                        <tbody>
        {list.map((value,index)=>(
            // console.log(value.is_Active)
            <>
            
            <tr>
                            <td>{value.firstName}</td>
                            <td>{value.lastName}</td>
                            <td>{value.emailId}</td>
                            <td>{value.phoneNumber}</td>
                            <td>{value.dateOfBirth}</td>
                            <td>{value.gender}</td>
                            <td>{value.password}</td>
                            <td>{value.updatedDate}</td>
                            <td>{value.is_active}</td>
                            <td>{value.CreatedDate}</td>
            </tr>
            
            </>
                

                
        ))}
        
         </tbody>
                        
                        
 
         
        </>
       
    )
}