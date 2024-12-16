

import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (

        <div>
        <div className="flex   w-full  h-4/6  absolute top-[2244px] bg-[#ffffff] justify-between ">
           

            {/* Footer */}
            <footer className="w-full bg-[#ffffff] px-10 ">
                {/* Footer Content */}
                <div className='w-full h-[350px] bg-[#ffffff] flex justify-between pb-4  border-b-[1px] border-[#c3d4e9]'>
                    {/* Left Section */}
                    <div className='relative top-20 left-[60px] w-[292px] h-[108px] gap-4 grid items-baseline'>
                        <div>
                            <Image src="/logo.svg" alt='logo' width={148} height={44} />
                        </div>
                        <p className='text-[#13131399] font-jakarta'>
                            Our vision is to provide convenience and help increase your sales business.
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className='flex justify-evenly w-3/6 '>
                    {/* 2nd sec-1 */}
                    <div className="w-[152px] h-[188px] leading-10 relative top-20 left-[60px] font-jakarta">
                        <h1 className='text-[#1A202C] font-semibold text-xl mb-4'>About</h1>
                        <ul className='text-[#13131399] '>
                            <li>How it works</li>
                            <li>Featured</li>
                            <li>Partnership</li>
                            <li>Business Relation</li>
                        </ul>
                    </div>

                    {/* 2nd sec-2 */}
                    <div className="w-[152px] h-[188px] leading-10 relative top-20 left-[60px] font-jakarta ">
                        <h1 className='text-[#1A202C] font-semibold text-xl mb-4'>Community</h1>
                        <ul className='text-[#13131399]'>
                            <li>Events</li>
                            <li>Blog</li>
                            <li>Podcast</li>
                            <li>Invite a friend</li>
                        </ul>
                    </div>

                    {/* 2nd sec-3 */}
                    <div className="w-[152px] h-[188px] leading-10 relative top-20 left-[60px] font-jakarta">
                        <h1 className='text-[#1A202C] font-semibold text-xl mb-4'>Socials</h1>
                        <ul className='text-[#13131399]'>
                            <li>Discord</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </div>
                </div>

 
<div className='flex  px-16 justify-between'>
    
                {/* Text Below Border */}
                <div className='mt-6 text-base font-semibold leading-6 text-[#1A202C] font-jakarta'>
                ©2022 MORENT. All rights reserved
                </div>

                {/* text below border-2 */}

                <div className='flex justify-between w-[350px]  h-6 '>

                <div className='mt-6 text-base font-semibold leading-6 text-[#1A202C]'>
                Privacy & Policy
                </div>

                <div className='mt-6 text-base font-semibold leading-6 text-[#1A202C]'>
                Terms & Condition
                </div>

                </div>
</div>



            </footer>
        </div>
        </div>
    )
}

export default Footer


