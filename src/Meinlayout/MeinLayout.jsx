import React from 'react';
import Navber from '../components/Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';


const MeinLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MeinLayout;