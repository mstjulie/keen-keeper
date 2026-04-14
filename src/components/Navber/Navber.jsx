import React from 'react';
import { Link, NavLink } from 'react-router';
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";


const Navber = () => {

    const link = (
        <>
        <NavLink to={"/"} className={({isActive})=>
        `text-[#64748B]   ${isActive ? "btn text-xl text-white bg-[#1f5c4a]": ""}`} > <RiHome2Line /> Home </NavLink>
        <NavLink to={"/Timeline"}  className={({isActive})=>
        `text-[#64748B] flex  ${isActive ? "btn text-xl text-white bg-[#1f5c4a]": ""}`}> <IoTimeOutline />Timeline</NavLink>
        <NavLink to={"/Stats"} className={({isActive})=>
        `text-[#64748B] ${isActive ? "btn text-xl text-white bg-[#1f5c4a]": ""}`} > <ImStatsDots />Stats</NavLink>
        </>
    ) 
    return (
        <nav className=' bg-base-100 shadow-sm '>
              <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <p className=" text-2xl font-bold">Keen<span className='text-[#244D3F]'>keeper</span></p>
                </div> 
   
            <div className="navbar-end flex gap-3">
                {link}
           </div>
  
             </div>
        </nav>
    );
};

export default Navber;