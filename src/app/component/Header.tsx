
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import SearchFilter from '@/app/component/SearchFilter'

const Header = () => {
  const [notifications, setNotifications] = useState(0)
  const [favorites, setFavorites] = useState(0)

  return (
    <div className="w-full">
      <header className="w-full bg-[#ffffff] border-[1px] border-[#c3d4e9] flex flex-wrap justify-between items-center px-4 py-4 md:py-6 lg:py-8 lg:px-12">
        {/* Logo */}
        <div className="flex items-center justify-center mb-4 md:mb-0">
          <Image src="/Logo.svg" alt="logo" width={148} height={44} />
        </div>

        {/* Search Input with Filter */}
        <SearchFilter />

        {/* Other Icons */}
        <div className="flex justify-between items-center w-full md:w-auto space-x-4">
          {/* Heart Icon */}
          <div className="relative">
            <span className="w-11 h-11 border-[1px] border-[#C3D4E966] rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-50">
              <Image src="/heart.svg" alt="heart-icon" width={24} height={24} />
            </span>
            {favorites > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {favorites}
              </span>
            )}
          </div>

          {/* Bell Icon */}
          <div className="relative">
            <span className="w-11 h-11 border-[1px] border-[#C3D4E966] rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-50">
              <Image src="/notification.svg" alt="notification-icon" width={24} height={24} />
            </span>
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </div>

          {/* Setting Icon */}
          <span className="w-11 h-11 border-[1px] border-[#C3D4E966] rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-50">
            <Image src="/setting-2.svg" alt="setting-icon" width={24} height={24} />
          </span>

          {/* User Image Icon */}
          <span className="w-11 h-11 border-[1px] border-[#C3D4E966] rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-50">
            <Image src="/img icon.svg" alt="img-icon" width={24} height={24} />
          </span>
        </div>
      </header>
    </div>
  )
}

export default Header
