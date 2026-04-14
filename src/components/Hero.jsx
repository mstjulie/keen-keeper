import React from 'react';

const Hero = () => {
    return (
        <div className='hero bg-base-200 min-h-screen'>
            <div className=" container mx-auto">
               <div className="hero-content text-center">
                 <div className="max-w-md">
                   <h1 className="text-5xl text-[#1F2937] font-bold whitespace-nowrap">Friends to keep close in your life</h1>
                   <p className="py-6 text-[#64748B]">
                     Your personal shelf of meaningful connections. Browse, tend, and nurture the
                     relationships that matter most.
                   </p>
                   <button className="btn text-xl text-white bg-[#1f5c4a]">Add a Friend</button>
                 </div>
               </div>
             </div>
        </div>
    );
};

export default Hero;