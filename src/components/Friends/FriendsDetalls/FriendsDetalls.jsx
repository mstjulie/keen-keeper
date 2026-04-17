import { useLoaderData, useParams } from 'react-router';
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { FriendContext } from '../../../context/FriendContext';
import { useContext } from 'react';


const FriendsDetalls = () => {
    const {id} = useParams();
        // console.log(id, 'id');
    
    const friends = useLoaderData();  
    //  console.log(friends, 'friends');  

    const friend = friends.find(friends => friends.id == id)
    //  console.log(friend, 'friend')

   
   const {handleCall, storedCalls} = useContext(FriendContext);
   console.log(handleCall, storedCalls, 'handleCall');
   
   
    return (   
      <div className='container mx-auto mt-10'> 

      {/* left side */}
        <div className='grid grid-cols-3 gap-6 bg-[#F8FAFC] p-6 max-w-full pt-10 '>
          <div className=''>
            <div className='flex flex-col space-y-2 items-center bg-base-100 rounded-xl p-4 text-center shadow-xl'>
            <img src={friend.picture} alt="mikasha" className='w-32 h-32 rounded-full object-cover' />
              <h1 className='text-2xl font-bold'>{friend.name}</h1> 
              <div className='flex flex-col justify-center items-center space-y-2'>
              <span className='badge bg-red-500 text-white font-semibold'>{friend.status}</span>
              <span className='badge bg-green-100 text-green-500 font-semibold'>{friend.tags}</span>
              </div>  
              <p className='text-[#64748B]'>{friend.bio}</p>
              <p className='text-[#64748B]'>Email: {friend.email}</p>
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
              <h1 className='text-3xl font-bold text-[#244D3F] '>{friend.days_since_contact}</h1>
            </div>

             <div className='items-center bg-base-100 rounded-xl p-10 text-center shadow-xl space-y-2 w-96'>
                <h1 className='text-3xl font-bold text-[#244D3F]'>{friend.goal}</h1>
                <p className='text-[#64748B]'>Goal (Days)</p>
             </div>

             <div className='items-center bg-base-100 rounded-xl p-10 text-center shadow-xl space-y-2 w-96'>
                <h1 className='text-3xl font-bold text-[#244D3F]'>{friend.next_due_date}</h1>
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
              
               <div className='flex flex-row space-x-3 pt-3'>
            <button className="btn  bg-base-100 text-xl py-6  shadow-xl" onClick={()=> handleCall(friend)}><FiPhoneCall />Call</button>
            <button className="btn  bg-base-100 text-xl py-6  shadow-xl"><MdOutlineTextsms />Text</button>
            <button className="btn  bg-base-100 text-xl py-6  shadow-xl"><CiVideoOn />Video</button>
          </div>

              </div>
              

             </div>

          </div>

        </div>
      </div>
    );
};

export default FriendsDetalls;