import React from 'react';
import Hero from '../../components/Hero';
import Cards from '../../components/card/Cards';
import Friends from '../../components/Friends/Friends';

const Homepage = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <Hero></Hero>
            <Cards></Cards>
            <Friends></Friends>
        </div>
    );
};

export default Homepage;