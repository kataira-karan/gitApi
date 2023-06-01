import React from "react";
import Card from "../Card/Card";
import RepoCard from "../RepoCard/RepoCard";
import HeaderNav from "../HeaderNav/HeaderNav";
import { GoRepo } from "react-icons/go";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from   'axios';
import { gsap } from "gsap";
import { SiTailwindcss, SiVitest } from "react-icons/si";

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

  const showLearning = () =>{
      gsap.fromTo(".learnings" , { x : "100%" , stagger : 0.5 } , { x : "0%" , duration:1 , }   )
      
  }

  useEffect(() => { 
    getUserData();

    showLearning()

  }, []);

  return   <div className="w-full relative flex flex-col pb-24  items-center justify-center  text-3px bg-primaryBlack pt-24     ">
   {/* display incline property restricts hights and width. It just wraps the */}


      <div className="absolute top-0 lg:right-0 lg:w-64 w-screen "> 

        <div className=" learnings p-4 text-center bg-gray-300 border-l-8 border-black border-b-4  font-bold " >
            Learning
        </div>    

        <div >
              <ul >
                  <li className=" learnings p-4   bg-gray-300 border-l-8 border-black ">
                     <a className=" flex items-center justify-center lg:justify-start" href="https://tailwindcss.com/"> 
                       <span className="text-blue-500 mr-4">
                         <SiTailwindcss></SiTailwindcss>
                        </span> 
                       <span>TailWind CSS</span>
                     </a>
                  </li>
                  <li className=" learnings p-4   bg-gray-300 border-l-8 border-black ">
                     <a className=" flex items-center justify-center lg:justify-start" href="https://vitejs.dev/"> 
                       <span className="text-blue-500 mr-4">
                       <SiVitest></SiVitest>  
                        </span> 
                       <span>Vite</span>
                     </a>
                  </li>
               

              </ul>
        </div>    

     
      </div>


      {
        userData  ? 
        <>
      <Card  userInfo={{ name:userData.name , userName : userData.login , avatar:userData.avatar_url , bio:userData.bio , company : userData.company , location : userData.location , followers : userData.followers , following : userData.following , public_repos : userData.public_repos , gitUrl : userData.html_url }} ></Card>         
      <div className="flex flex-col flex-wrap  mt-8 ">
      <div className="flex flex-row  items-center text-white font-bold text-2xl mb-4">
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
