import React from 'react';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center text-primary-content p-10 bg-[#244D3F] ">
                <h1 className='text-6xl font-bold'>KeenKeeper</h1>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div>
                 <h5 className='text-2xl'>Social Links</h5>
                    <div className='flex flex-row gap-3'>
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
            </footer>
                <footer className='footer flex flex-row justify-between bg-[#244D3F] text-base-content border-gray-400 border-t px-10 py-4'>
                    
                    <div className=''>
                        <p className='text-white'> © 2026 KeenKeeper. All rights reserved.</p>
                    </div>
                    <div className='flex flex-row'>
                        <p className='text-[#FAFAFA]'>Privacy Policy</p>
                        <p className='text-[#FAFAFA]'> Terms of Service  </p>
                        <p className='text-[#FAFAFA]'>Cookies</p>
                    </div>
                    
                
            </footer>
        </div>
    );
};

export default Footer;