'use client';

import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="w-full">
      <header className="w-full bg-[#ffffff] border-[1px] border-[#c3d4e9] flex flex-wrap justify-between items-center px-4 py-4 md:py-6 lg:py-8 lg:px-12">
        {/* Logo */}
        <div className="flex items-center justify-center mb-4 md:mb-0">
          <Image src="/Logo.svg" alt="logo" width={148} height={44} />
        </div>

        {/* Search Input */}
        <div className="flex items-center w-full md:w-auto justify-between px-4 py-2 border-[1px] border-[#c3e4d9] rounded-[70px] lg:w-[492px] h-[44px] mb-4 md:mb-0">
          <div className="flex items-center w-full">
            <Image src="/search-normal.svg" alt="search" width={24} height={24} />
            <input
              type="text"
              placeholder="Search something here"
              className="ml-4 text-[#596780] text-sm w-full outline-none"
            />
          </div>
          <Image src="/filter.svg" alt="filter" width={24} height={24} />
        </div>

        {/* Other Icons */}
        <div className="flex justify-between items-center w-full md:w-auto space-x-4">
          {/* Heart Icon */}
          <span className="w-11 h-11 border-[1px] border-[#C3D4E966] rounded-full flex justify-center items-center">
            <Image src="/heart.svg" alt="heart-icon" width={24} height={24} />
          </span>

          {/* Bell Icon */}
          <span className="w-11 h-11 border-[1px] border-[#C3D4E966] rounded-full flex justify-center items-center">
            <Image src="/notification.svg" alt="notification-icon" width={24} height={24} />
          </span>

          {/* Setting Icon */}
          <span className="w-11 h-11 border-[1px] border-[#C3D4E966] rounded-full flex justify-center items-center">
            <Image src="/setting-2.svg" alt="setting-icon" width={24} height={24} />
          </span>

          {/* User Image Icon */}
          <span className="w-11 h-11 border-[1px] border-[#C3D4E966] rounded-full flex justify-center items-center">
            <Image src="/img icon.svg" alt="img-icon" width={24} height={24} />
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
