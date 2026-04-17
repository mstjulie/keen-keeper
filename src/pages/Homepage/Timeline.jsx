import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';

const Timeline = () => {

   const {storedCalls} = useContext(FriendContext);
     console.log( storedCalls, 'handleCall');

  return (
    <div>
      
    </div>
  );
};

export default Timeline;