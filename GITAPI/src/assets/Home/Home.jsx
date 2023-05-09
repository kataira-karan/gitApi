import React from "react";
import Card from "../Card/Card";
import RepoCard from "../RepoCard/RepoCard";
import HeaderNav from "../HeaderNav/HeaderNav";
import { GoRepo } from "react-icons/go";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from   'axios';

const Home = () => {

  let location = useLocation()
  const [userData, setuserData] = useState();
  const [userRepos, setuserRepos] = useState();
  console.log(location)

  const getUserData =async () =>{
    await axios.get(`https://api.github.com/users/${location.state}`).then((res)=>{
    console.log(res)
    setuserData(res.data)
   }).then(async ()=>{
    await axios.get(`https://api.github.com/users/${location.state}/repos`).then((res)=>{
    setuserRepos(res.data);
    console.log(res.data)
    })
   })

  }

  useEffect(() => {
    getUserData();

  }, []);

  return    <div className=" w-full  flex flex-col pb-24  items-center justify-center  text-3px bg-primaryBlack ">
   {/* display incline property restricts hights and width. It just wraps the */}

      {
        userData  ? 
        <>
      <Card  userInfo={{ name:userData.name , userName : userData.login , avatar:userData.avatar_url , bio:userData.bio , company : userData.company , location : userData.location , followers : userData.followers , following : userData.following , public_repos : userData.public_repos , gitUrl : userData.html_url }} ></Card>         
      <div className="flex flex-col flex-wrap  mt-8 ">
      <div className="flex flex-row  items-center text-white font-bold text-2xl">
        <span className="pr-4">   <GoRepo></GoRepo>  </span>
        <span>   Repositories </span> 
        <span>
        </span>
      </div>
  
  <div className="grid grid-col-1  sm:grid-col-2  md:grid-cols-2 lg:grid-cols-3  justify-start">
    { 
      userRepos ?  userRepos.map((repo)=>{
        return <RepoCard userName={userData.login} r={repo}  repo={{name : repo.name}} ></RepoCard>
      }) : null
      
    }
  

  </div>
    
 
  </div>
        </> 
        :
        "loading"

      }
    </div>;
};

export default Home;
