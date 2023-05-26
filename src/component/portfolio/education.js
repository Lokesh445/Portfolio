import React from "react";
import study from "./study.png";
import { BoxIconElement } from "boxicons";



export function Education(){
return(
    <>

    <div className="container-fluid education pb-5 pt-5" id="edu">
    <h1 className="text-white text-center"><b>Educational Details</b></h1>
        <div className="row">
           
                <div className="col-lg-6 pl-5 col-10">
                <img src={study} className="col-lg-9  ml-5 eimage" />
            </div>
            <div className="col-lg-6">
            <div className=" pl-5 pt-5">
                <div className="col-lg-1"/>
                <div className="col-lg-10 p-4 col-10 deducation">
                     <h3 className="etitle"><b>Bachelor's Degree</b></h3>
                     <p><span className="edufont">College Name :</span> Ramakrishna Institute Of Technology <br/><span className="edufont">Department :</span> Computer Science Engineering <br/><span className="edufont">Percentage :</span> 72%</p>
                  
                    
                </div>
                <div className="col-lg-1 p-4"/> 
                <div className="col-lg-10 p-4 col-10 deducation">
                <h3 className="etitle"><b>Higher secondary School</b></h3>
                     <p><span className="edufont">School Name :</span> Keartiman Matriculation Higher Secondary School <br/><span className="edufont">Percentage :</span> 94%</p>
                
                </div>
                <div className="col-lg-1 p-4"/> 
                <div className="col-lg-10 p-4 col-10 deducation">
                <h3 className="etitle"><b>Secondary School Leaving Certificate</b></h3>
                     <p><span className="edufont">School Name :</span> Keartiman Matriculation Higher Secondary School <br/><span className="edufont">Percentage :</span> 87%</p>
                
                </div>
                <div className="col-lg-10 p-5 col-10 text-center">
                

                </div>
               
                
                </div>
            </div>
            <div className="col-lg-1"/>
          
        </div>
      
        
        <hr className="bg-secondary"/>

        <footer id="footer">
    <div className="container-fluid text-secondary">
      <h3 className="text-white">Contact Me</h3>
      {/* <p>“ Code is like humor. When you have to explain it, it’s bad.”</p> */}
      <div className="social-links">

        <a href="https://github.com/Lokesh445" class="github"><box-icon type='logo' name='github'></box-icon></a>
        {/* <a href="https://www.instagram.com/ig_keerthana/" class="instagram"><i class="bx bxl-instagram"></i></a> */}
        <a href="mailto:lokeshkruger@gmail.com" class="google-plus"><box-icon type='logo' name='gmail'></box-icon></a>
        <a href="https://www.linkedin.com/in/lokesh-m-s-b93446178/" class="linkedin"><box-icon name='linkedin-square' type='logo' ></box-icon></a>
      </div>
      <div class="copyright">
        &copy; Copyright <strong><span>@2023 Lokesh</span></strong>. All Rights Reserved
      </div>
      </div>
    </footer>








    </div>
    </>
);
}