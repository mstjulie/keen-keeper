import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import mikasha from '../../../assets/MikasaA.webp'
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";

const FriendsDetalls = () => {
    const {id} = useParams();
        console.log(id, 'id');
    
    const friends = useLoaderData();  
    console.log(friends, 'friends');  

    const friend = friends.find(friends => friends.id == id)
    console.log(friend, 'friend')

    

    return (   
      <div className='container mx-auto mt-10'> 

      {/* left side */}
        <div className='grid grid-cols-3 gap-6 bg-[#F8FAFC] p-6 max-w-full pt-10 '>
          <div className=''>
            <div className='flex flex-col space-y-2 items-center bg-base-100 rounded-xl p-4 text-center shadow-xl'>
            <img src={mikasha} alt="mikasha" className='w-32 h-32 rounded-full object-cover' />
              <h1 className='text-2xl font-bold'>Mikasa Ackerman</h1> 
              <div className='flex flex-col space-y-2'>
              <span className='badge bg-red-500 text-white font-semibold'>Overdue</span>
              <span className='badge bg-green-100 text-green-500 font-semibold'>Family</span>
              </div>  
              <p className='text-[#64748B]'>"Former colleague, great mentor"</p>
              <p className='text-[#64748B]'>Preferred: email</p>
            </div>
          <div className='flex flex-col space-y-3 pt-3'>
            <button className="btn  bg-base-100 text-xl py-6  shadow-xl"><RiNotificationSnoozeLine />Snooze 2 weeks</button>
            <button className="btn  bg-base-100 text-xl py-6  shadow-xl"><FiArchive />Archive</button>
            <button className="btn  bg-base-100 text-xl py-6  shadow-xl text-red-500"><RiDeleteBin5Line />Delete</button>
          </div>
          </div>

        {/* Right side */}
          <div className='col-span-2 space-y-4 max-w-full'>
            <div className='flex flex-3 gap-3 '>
            <div className='flex justify-center items-center bg-base-100  rounded-xl p-10 text-center shadow-xl w-96'>
              <h1 className='text-3xl font-bold text-[#244D3F] '>62</h1>
            </div>

             <div className='items-center bg-base-100 rounded-xl p-10 text-center shadow-xl space-y-2 w-96'>
                <h1 className='text-3xl font-bold text-[#244D3F]'>30</h1>
                <p className='text-[#64748B]'>Goal (Days)</p>
             </div>

             <div className='items-center bg-base-100 rounded-xl p-10 text-center shadow-xl space-y-2 w-96'>
                <h1 className='text-3xl font-bold text-[#244D3F]'>Feb 27, 2026</h1>
                <p className='text-[#64748B]'>Next Due</p>
             </div>
            </div>


             <div >

              <div className='flex justify-between bg-base-100  rounded-xl p-10 shadow-xl space-y-2'>
              <div>
                <h2 className='text-3xl font-bold text-[#244D3F]'>Relationship Goal</h2>
                <h5 className='text-[#64748B]'>Connect every 30 days</h5>
                </div>
              <div>
                  <a role="button" className="btn text-[#64748B]">Edit</a>
              </div>
              </div>

              <div className='bg-base-100 rounded-xl shadow-xl p-4 mt-7 space-x-2'>
                <h1 className='text-[#244D3F] text-2xl font-bold'>Quick Check-In</h1>
                <div className='flex justify-between gap-4 mt-2'>

                 <div className='flex flex-row justify-center items-center bg-[#F8FAFC] rounded-xl p-10 text-center shadow-xl space-y-2 w-96'>
                  <p className='text-[#64748B] text-2xl'><FiPhoneCall />Call</p>
                </div>

                <div className='flex flex-row justify-center items-center bg-[#F8FAFC] rounded-xl p-10 text-center shadow-xl space-y-2 w-96'>
                  <p className='text-[#64748B] text-2xl'><MdOutlineTextsms />Text</p>
                </div>

                <div className='flex flex-row justify-center items-center bg-[#F8FAFC] rounded-xl p-10 text-center shadow-xl space-y-2 w-96'>
                  <p className='text-[#64748B] text-2xl'><CiVideoOn />Video</p>
                </div>

                </div>

              </div>

             </div>

          </div>

        </div>
      </div>
    );
};

export default FriendsDetalls;