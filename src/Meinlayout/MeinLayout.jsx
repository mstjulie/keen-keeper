import React from 'react';
import Navber from '../components/Navber/Navber';
import { Outlet } from 'react-router';


const MeinLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MeinLayout;