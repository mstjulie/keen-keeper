import React, { use } from 'react';
import Mikasa from '../../assets/MikasaA.webp'


const friendsPromise = fetch('/data.json')
.then(res=> res.json());

const Friends = () => {
    const friends = use(friendsPromise);
    console.log(friends, 'friends');
    return (
        <>
         <div className='py-15 border-t border-solid border-gray-300'>
                <h1>Your Friends</h1>
            </div>

    <div className='grid grid-cols-4 gap-3 container mx-auto my-auto'>
        {
            friends.map((friends, ind)=>{
                return (
                    <div key={ind} className=''>
           
            <div>
                <div className="card bg-base-100 shadow-sm">
                    <figure className="px-10 pt-10">
                      <img
                        src={friends.picture}
                        alt="Mikasa"
                        className="w-32 h-32 rounded-full object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="text-2xl font-bold">{friends.name}</h2>
                      <p className='text-[#64748B] font-semibold'>62d ago</p>
                      <p className='text-[#64748B] font-semibold'>Bio: {friends.bio}</p>
                      <div className='flex justify-between gap-2'>
                           {
                        friends.tags.map((tag)=> (<div className="badge bg-green-100 text-green-500 font-semibold ">{tag}</div>))
                           }
                      </div>
                      
                      
                      <div className="card-actions">
                        <button className="btn bg-[#EFAD44] text-white rounded-3xl">{friends.status}</button>
                      </div>
                    </div>
                   </div>
            </div>
        </div>
                )
                 
            })
          }
    </div>
          


        </>
       
    );
};

export default Friends;