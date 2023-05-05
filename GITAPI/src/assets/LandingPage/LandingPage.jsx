import React from 'react'
import { GoMarkGithub } from "react-icons/go";
import { useHistory } from 'react-router-dom';

const LandingPage = () => {

    const history = useHistory()


    const showDetails = () =>{
        console.log("show details")
        history.push("/user")
    }

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-primaryBlack space-y-4 '>

        <span className='text-4xl text-white'>
        <GoMarkGithub></GoMarkGithub>
            
        </span>

        <span className='font-bold text-white mb-4' >Enter Git Username</span>

        <input className='p-4 rounded-lg border' /> 

        <button className='p-2 text-white hover:border-b-2' onClick={showDetails}>Show Details</button>

    </div>
  )
}

export default LandingPage
