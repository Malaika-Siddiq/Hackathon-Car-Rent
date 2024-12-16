'use client'

import React from 'react'
import Image from 'next/image'
import { FaHeart, FaBell, FaSearch, FaCog } from 'react-icons/fa'

const Header = () => {
  return (
    <div className=''>
      

      <header className='w-full  bg-[#ffffff] border-[1px] border-[#c3d4e9] flex justify-around items-center  h-32 '>
        {/* logo */}
          
        <div className='flex justify-center items-center ml-4'>
          <Image src="/logo.svg" alt='logo' width={148} height={44} />
        </div>

        {/* input */}

        <div className=' flex items-center justify-between px-5 border-[1px] border-[#c3e4d9] rounded-[70px]  w-[492px] h-[44px] '>

       <div className=' flex items-center'>
            <Image
              src="/search-normal.svg"
              alt='search'
              width={24}
              height={24}
            />


        

          <input type="text" placeholder='Search something here' className='ml-6  text-[#596780]' />
          </div>


        
            <Image
              src="/filter.svg"
              alt='filter'
              width={24}
              height={24}


            />
       

        </div>
       




        {/* other icons */}

        <div className='flex  justify-evenly items-center h-[44px] w-[236px] ml-36'>

          {/* heart icon */}
          <span className=' w-11 h-11 border-[1px] border-[#C3D4E966] rounded-[90px] flex justify-center'>
            <Image
              src="/heart.svg"
              alt='heart-icon'
              width={24}
              height={24}

            />

          </span>

          {/* bell icon */}
          <span className=' w-11 h-11 border-[1px] border-[#C3D4E966] rounded-[90px] flex justify-center   '>
            <Image
              src="/notification.svg"
              alt='notification-icon'
              width={24}
              height={24}

            />
            {/* notify */}
            {/* <span className=' relative top-[2px] left-[2px]'>

                      <Image
                      src="/notif.svg"
                      alt='notif'
                      width={11}
                      height={11}
                      />

                    </span> */}

          </span>

          {/* setting */}
          <span className=' w-11 h-11 border-[1px] border-[#C3D4E966] rounded-[90px] flex justify-center'>
            <Image
              src="setting-2.svg"
              alt='setting-icon'
              width={24}
              height={24}

            />

          </span>

          {/* img icon  */}
          <span className=' w-11 h-11 border-[1px] border-[#C3D4E966] rounded-[90px] flex justify-center'>
            <Image
              src="/img icon.svg"
              alt='img-icon'
              width={24}
              height={24}

            />

          </span>
        </div>





      </header>
    </div>

  )
}

export default Header
