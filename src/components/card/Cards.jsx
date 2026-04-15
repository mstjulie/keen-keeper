import React from 'react';

const Cards = () => {
    return (
        <div className='grid grid-cols-4 gap-8 pt-15 container mx-auto pb-16'>
            <div className="card card-border bg-[#FFFFFF] shadow-1xl px-16 py-8">
                <div className="card-body items-center">
                  <h2 className="text-5xl font-bold text-[#1f5c4a]">10</h2>
                  <p className='text-[#64748B]'>Total Friends</p>
                </div>
            </div>
            <div className="card card-border bg-[#FFFFFF] shadow-1xl px-16 py-8">
                <div className="card-body items-center">
                  <h2 className="text-5xl font-bold text-[#1f5c4a]">3</h2>
                  <p className='text-[#64748B]'>On Track</p>
                </div>
            </div>
            <div className="card card-border bg-[#FFFFFF] shadow-1xl px-16 py-8">
                <div className="card-body items-center">
                  <h2 className="text-5xl font-bold text-[#1f5c4a]">6</h2>
                  <p className='text-[#64748B]'>Need Attention</p>
                </div>
            </div>
            <div className="card card-border bg-[#FFFFFF] shadow-1xl px-16 py-8">
                <div className="card-body items-center">
                  <h2 className="text-5xl font-bold text-[#1f5c4a]">12</h2>
                  <p className='text-[#64748B]'>Interactions This Month</p>
                </div>
            </div>


        </div>
    );
};

export default Cards;