import React, {  createContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendProvider = ({children}) => {

    

    const [storedCalls, setStoredCall] = useState([]);
    const [text, setText] = useState([]);
     const [video, setVideo] = useState([]);

    const handleCall = (currentfriend) => {
    
    const isExistCall = storedCalls.find((Call) => Call.id === currentfriend.id);
    if( isExistCall)
    {
       ('')
    }
       else {
        setStoredCall([... storedCalls, currentfriend])
        toast.success(`${currentfriend.friendName} is added to call`)
    }

    console.log(currentfriend, storedCalls, "friend");
    }

       const handleText = (currentfriend) => {
    
    const isExistText = text.find((Call) => Call.id === currentfriend.id);
    if( isExistText)
    {
       ('')
    }
       else {
        setText([... text, currentfriend])
        toast.success(`${currentfriend.friendName} is added to text`)
    }

    console.log(currentfriend, storedCalls, "friend");
    } 

    
    
    const handleVideo = (currentfriend) => {
    const isExistVideo = video.find((Call) => Call.id === currentfriend.id);
    if( isExistVideo)
    {
       ('')
    }
       else {
        setVideo([... video, currentfriend])
        toast.success(`${currentfriend.friendName} is added to video`)
    }
    console.log(currentfriend, storedCalls, "friend");
    }



    const data ={
       storedCalls,
        setStoredCall,
        handleCall,
        text,
        setText,
        handleText,
        video,
        setVideo,
        handleVideo,
    };
    
    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>

}

export default FriendProvider;