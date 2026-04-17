import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';

const Timeline = () => {

   const {storedCalls, text, video} = useContext(FriendContext);
     console.log( storedCalls, text, video, 'friendContsxt');

  return <div className='container mx-auto'>
       call: {storedCalls.lenght} <br />
       text: {text.lenght} <br />
       video: {video.lenght} 
  </div>
};

export default Timeline;