import React from 'react'
import './task3.css'
import rcb from './rcb-img.png'
import csk from './csk-img.png'

function SuperLeague(){
    return(
        <>
            
           
                <div className='maindiv'>
                <h1 className='text-white text'>Super Over League</h1>
                    <img src={rcb} alt=''></img>
                    <img src={csk} alt=''></img>
                </div>
            
        </>
    )
}
export default SuperLeague;