import React from 'react'
import { BsPersonWorkspace } from "react-icons/bs";
import { GoLocation, GoCalendar } from "react-icons/go";

const Card = () => {
  return (
    <div className='flex flex-col justify-center items-center w-96  bg-gray text-white rounded-lg overflow-hidden shadow-md '>
        <img  className='rounded-full shadow-sm m-2 h-40 w-40 sm:48 object-cover ' src="https://images.pexels.com/photos/442582/pexels-photo-442582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        
        <div className='flex flex-col justify-center items-center'>
        <span className=' font-bold my-2 text-3xl tracking-wider'>
            Karan Kataria
        </span>

        <span className='font-bold my-2 text-blue-100'>
            @Karankataria
        </span>
       
        <span className='flex flex-row items-center justify-center text-white my-2 '>
          <div className='flex items-center mr-8' > 
            <span className='mr-4' >
              <BsPersonWorkspace></BsPersonWorkspace>
            </span> 
            <span className='text-sm font-bold'> Job </span>   
          </div>  
          <div  className='flex items-center mr-8  '> 
            <span className='mr-2' >
            <GoLocation></GoLocation>
            </span> 
            <span> Location  </span>   
          </div>  
          <div  className='flex items-center '> 
            <span className='mr-2'  >
            <GoCalendar></GoCalendar>
            </span> 
            <span> Joint Ad </span>   
          </div>  
        </span>

        <div className='flex text-white'> 
          <div className='flex flex-col m-4 p-4 rounded bg-secondaryBlack   justify-center items-center'>
            <span className='font-bold' > 100 </span>
            <span className='text-sm text-gray-700'> Repository </span>
          </div>
          <div className='flex flex-col m-4 p-4 rounded bg-secondaryBlack   justify-center items-center'>
            <span className='font-bold  ' > 100 </span>
            <span className='text-sm text-gray-700'> Repository </span>
          </div>
          <div className='flex flex-col m-4 p-4 rounded bg-secondaryBlack   justify-center items-center'>
            <span className='font-bold' > 100 </span>
            <span className='text-sm text-gray-700'> Repository </span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Card
