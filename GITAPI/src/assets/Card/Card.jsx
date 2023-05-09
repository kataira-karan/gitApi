import React from 'react'
import { BsPersonWorkspace } from "react-icons/bs";
import { GoLocation, GoCalendar } from "react-icons/go";
import { Link } from 'react-router-dom';

const Card = (props) => {

  const {name , userName ,avatar , bio , following , followers , public_repos , location , company ,gitUrl } = props.userInfo;

  return (
    <div className='flex flex-col justify-center items-center w-96  bg-gray text-white rounded-lg overflow-hidden shadow-md '>
        <img  className='rounded-full shadow-sm m-2 h-40 w-40 sm:48 object-cover border-4 p-2 '   src={avatar}></img>
        
        <div className='flex flex-col justify-center items-center'>
        <span className=' font-bold my-2 text-3xl tracking-wider'>
            {name}
        </span>

        <span className='font-bold my-2 text-blue-100'>
        <a target='_blank' href={gitUrl}>  
        @{userName}
        </a>    
        </span>
       
        <span className='flex flex-row items-center justify-center text-white my-2 '> 

          {
             company ?  <div className='flex items-center mr-8' > 
             <span className='mr-4' >
               <BsPersonWorkspace></BsPersonWorkspace>
             </span> 
             <span className='text-sm font-bold'> {company} </span>   
           </div>   :  ""
          }

          { 
            location ?   <div  className='flex items-center mr-8  '> 
            <span className='mr-2' >
            <GoLocation></GoLocation>
            </span> 
            <span> {location}  </span>   
          </div>   : ''
          }
              
         
          {/* <div  className='flex items-center '> 
            <span className='mr-2'  >
            <GoCalendar></GoCalendar>
            </span> 
            <span> Joint Ad </span>   
          </div>   */}
        </span>

        <div className='flex text-white'> 
          <div className='flex flex-col m-4 p-4 rounded bg-secondaryBlack   justify-center items-center'>
            <span className='font-bold' > {public_repos} </span>
            <span className='text-sm text-gray-700'> Repository </span>
          </div>
          <div className='flex flex-col m-4 p-4 rounded bg-secondaryBlack   justify-center items-center'>
            <span className='font-bold  ' > {following} </span>
            <span className='text-sm text-gray-700'> Following </span>
          </div>
          <div className='flex flex-col m-4 p-4 rounded bg-secondaryBlack   justify-center items-center'>
            <span className='font-bold' > {followers} </span>
            <span className='text-sm text-gray-700'> Followers </span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Card
