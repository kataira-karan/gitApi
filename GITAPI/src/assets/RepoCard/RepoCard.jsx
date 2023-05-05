import React from 'react'
import { GoRepo } from "react-icons/go";

const RepoCard = () => {
  return (
    <div className='p-4 w-80w m-4 md:m-4 lg:w-60 md:w-40w lg:m-2 rounded-lg  bg-gradient-to-r from-gray1 to-gray2 text-black'>
      <div>
        <span className='flex flex-row items-center pr-4'>  
        <span className='pr-2'> <GoRepo></GoRepo> </span>  
        <span className='text-lg font-semibold'> Repo Name </span>

        </span>
      </div>

      <span className='text-sm line-clamp-2 mt-2'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
      </span>

      <div className='flex flex-row justify-between items-center mt-2 text-xs' >
            <span>Languagers </span>
            <span> Size </span>
      </div>

    </div>
  )
}

export default RepoCard
