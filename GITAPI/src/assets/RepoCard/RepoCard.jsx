import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { GoRepo } from "react-icons/go";
import { BiGitRepoForked } from "react-icons/bi";

const RepoCard = (props) => {

  const {userName ,r} = props;
    const {name} = props.repo
  const [repoDetails, setrepoDetails] = useState({});
  const [languages, setlanguages] = useState([]);

  const getRepoDetails = async () =>{

    await axios.get(`https://api.github.com/repos/${userName}/${name}/languages`).then((res)=>{
      console.log(res.data);
      setlanguages(res.data)
    })

  }

  useEffect(() => {

    getRepoDetails()

  }, []);


  return (
    <div className='p-4 w-80w m-4 md:m-4 md:w-40w lg:w-80 lg:p-6 lg:m-2 rounded-lg  bg-gradient-to-r from-gray1 to-gray2 text-black hover:cursor-pointer'>
      <div>
        <span className='flex flex-row items-center pr-4'>  
        <span className='pr-2'> <GoRepo></GoRepo> </span>  
        <span className='text-lg font-semibold line-clamp-1'> {name} </span>

        </span>
      </div>

      <span className='text-xs line-clamp-2 mt-2'>
      {r.description}

      </span>

   

      <div className='text-xs flex line-clamp-1 mt-2  '>
              {
                Object.keys(languages).map((key)=> <span className='mr-2'> {key} </span> )
              }
       </div> 
        
       <div div className='flex flex-row font-bold justify-between items-center mt-2 text-xs' >
              {/* <span>  { Object.keys(subjects).map((keyName , i)=>(
                    <span> {subjects[keyName]}  </span>
              )) }   </span> */}

              <span className='flex items-center'>  <span className='mr-2'> <BiGitRepoForked></BiGitRepoForked> </span>  {r.forks} </span>
              
              <span className='flex items-center'>   {r.size}  Kb </span>
      </div>
      

    </div>
  )
}

export default RepoCard
