import React from 'react';
import { useParams } from 'react-router';

const Timeline = () => {
    const params = useParams()
        console.log(params, 'params');
    return (
        <div>
            <h1>Timeline</h1>
        </div>
    );
};

export default Timeline;