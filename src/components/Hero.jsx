import React from 'react';
import { FaPlus } from "react-icons/fa6";

const Hero = () => {
    return (
        <div >
            <div className="hero bg-[#F8FAFC]  pt-10">
               <div className="hero-content text-center">
                 <div className="max-w-md">
                   <h1 className=" flex flex-col gap-2 justify-center items-center text-5xl text-[#1F2937] font-bold whitespace-nowrap">Friends to keep close in your life</h1>
                   <div className=''>
                   <p className="py-6 text-[#64748B]">
                     Your personal shelf of meaningful connections. Browse, tend, and nurture the
                     relationships that matter most.
                   </p>
                   <button className="btn text-xl text-white bg-[#1f5c4a]"> <FaPlus />Add a Friend</button>
                   </div>
                 </div>
               </div>
             </div>
        </div>
    );
};

export default Hero;