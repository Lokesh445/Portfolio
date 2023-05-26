import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function Register() {
    const navigate = useNavigate();
    const validate = () => {
        // preventDefault
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var dateOfBirth = document.getElementById("dob").value;
    var emailId = document.getElementById("email").value;
    var gender = document.getElementById("gen").value;
    var phoneNumber = document.getElementById("phone").value;
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("cPass").value;
   
    if(firstname==""){
        alert("name is empty")
    }else if(emailId==""){
        alert("email is empty")
    }else if(gender==""){
        alert("gen is empty")
    }else if(phoneNumber==""){
        alert("phone is empty")
    }
    else if(password==""){
        alert("password is empty")
    }else if(confirmPassword==""){
        alert("confirmPassword is empty")
    }
    else if(confirmPassword!=password){
        alert("mismatch")
    }else{
        let register = {
            "firstName":firstname,
            "lastName":lastname,
            "emailId":emailId,
           "phoneNumber":phoneNumber,
            "dateOfBirth":dateOfBirth,
            "gender":gender,
            "password":password,
        }
        axios.post('http://localhost:8080/auth/insert',register).then((res) => {
            console.log(res);
            
            if(res.status == 200) {
                
                navigate("/")
            } 
            
           
        }).catch((err) => {
            alert(err);
        })

    }
}


    return (
        <>
            <div className="container">
                <h1>Register Now</h1>
                <form id="registrationForm">
                    <div className="form-group">
                        <label>FirstName:<span className="span">*</span></label>
                        <input type="text" id="fname" name="name" required />
                    </div>
                    <div className="form-group">
                        <label>LastName:<span className="span">*</span></label>
                        <input type="text" id="lname" name="name" required />
                    </div>
                    <div className="form-group">
                        <label>Dob<span className="span">*</span></label>
                        <input type="text" size={20} placeholder="YYYY-MM-DD" pattern="(?:19|20)(?:(?:[13579][26]|[02468][048])-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))|(?:[0-9]{2}-(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:29|30))|(?:(?:0[13578]|1[02])-31)))" class="form-control " maxLength={20} name="eventDate" id="dob" required autofocus autocomplete="nope"/>
                    </div>
                    <div className="form-group">
                        <label>Email:<span className="span">*</span></label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label>Gender:</label>
                        <input type="text" id="gen" name="gen" required />
                    </div>
                    <div className="form-group">
                        <label>Mobile No:<span className="span">*</span></label>
                        <input type="text" id="phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label>Password:<span className="span">*</span></label>
                        <input type="password" id="pass" name="password" required />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:<span className="span">*</span></label>
                        <input type="password" id="cPass" name="confirmPassword" required />

                    </div>
                    <input type="button" value="submit" onClick={validate}/>
                </form>
            </div>
        </>
    )
}