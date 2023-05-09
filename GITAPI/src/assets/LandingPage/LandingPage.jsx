import React, { useEffect } from 'react'
import { GoMarkGithub } from "react-icons/go";  
import { useHistory } from 'react-router-dom';

import { useState } from 'react';


const LandingPage = () => {

  const [userName, setuserName] = useState("");

    const history = useHistory()
    const [userData, setuserData] = useState({});

    const showDetails =  () =>{

      

        console.log("show details")
        history.push({ pathname:`/${userName}` , state: userName  })
    }

    useEffect(() => {
      
    }, [userData]);

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-primaryBlack space-y-4 '>

        <span className='text-4xl text-white'>
        <GoMarkGithub></GoMarkGithub>
            
        </span>

        <span className='font-bold text-white mb-4' >Enter Git Username</span>

        <input value={userName} onChange={(e) => setuserName(e.target.value)} className='p-4 rounded-lg border' /> 

        <button className='p-2 text-white hover:border-b-2' onClick={showDetails}>Show Details</button>

    </div>
  )
}

export default LandingPage
