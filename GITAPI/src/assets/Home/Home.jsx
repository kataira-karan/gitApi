import React from "react";
import Card from "../Card/Card";
import RepoCard from "../RepoCard/RepoCard";
import HeaderNav from "../HeaderNav/HeaderNav";
import { GoRepo } from "react-icons/go";

const Home = () => {

  return    <div className=" w-full  flex flex-col pb-24  items-center justify-center  text-3px bg-primaryBlack ">
   {/* display incline property restricts hights and width. It just wraps the */}

  <HeaderNav></HeaderNav>
  <Card></Card>         

  <div className="flex flex-col flex-wrap  mt-8 ">
  
  <div className="flex flex-row  items-center text-white font-bold text-2xl">
    <span className="pr-4">   <GoRepo></GoRepo>  </span>
    <span>   Repositories </span>
  </div>
  
  <div className="grid grid-col-1  sm:grid-col-2  md:grid-cols-2 lg:grid-cols-4 justify-start">
  <RepoCard></RepoCard>
  <RepoCard></RepoCard>
  <RepoCard></RepoCard>
  <RepoCard></RepoCard>
  <RepoCard></RepoCard>
  <RepoCard></RepoCard>
  <RepoCard></RepoCard>

  </div>
    
 
  </div>
  

</div>;
};

export default Home;
