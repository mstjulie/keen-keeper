import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendsDetalls = () => {
    const {id} = useParams();
        console.log(id, 'id');
    
    const friends = useLoaderData();  
    console.log(friends, 'friends');  

    const friend = friends.find(friends => friends.id == id)
    console.log(friend, 'friend')

    return (
        <div>
            
        </div>
    );
};

export default FriendsDetalls;