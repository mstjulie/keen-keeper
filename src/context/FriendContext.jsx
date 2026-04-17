import React, {  createContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendProvider = ({children}) => {

    

    const [storedCalls, setStoredCall] = useState([]);

    const handleCall = (currentfriend) => {
    
    const isExistCall = storedCalls.find((Call) => Call.id === currentfriend.id);
    if( isExistCall)
    {
       ('')
    }
       else {
        setStoredCall([... storedCalls, currentfriend])
        toast.success(`${currentfriend.friend} is added to list`)
    }

    console.log(currentfriend, storedCalls, "friend");
    }
    const data ={
       storedCalls,
        setStoredCall,
        handleCall,
    };
    
    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>

}

export default FriendProvider;