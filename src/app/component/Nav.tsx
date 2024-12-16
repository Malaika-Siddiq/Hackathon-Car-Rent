import Image from 'next/image'
import React from 'react'
Image

const Nav = () => {
    return (
        <nav className="flex justify-around items-center h-32">

            <div className="flex w-full h-[124px] bg-[#ffffff] border-[1px] border-[#c3d4e9]  ">

                <Image src="/logo.svg" alt='logo' width={148} height={44} />

                <div className="flex justify-between px-5 border-2 border-gray-400 h-10 rounded-full p-2 w-[450px]">

                    <div className="flex items-center">

                    <Image
                        src="/search-normal.svg"
                        alt='search'
                        width={24}
                        height={24}
                    />

                    <input type="search" placeholder='Search Something Here' className='w-60 h-7 ml-6' />
                    
                    </div>
                    

                    <Image
                        src="/filter.svg"
                        alt='filter'
                        width={24}
                        height={24}


                    />
                </div>
            </div>
            <div className="flex">
                <Image
                    src="/heart.svg"
                    alt='heart-icon'
                    width={24}
                    height={24}

                />
                <Image
                    src="/notification.svg"
                    alt='notification-icon'
                    width={24}
                    height={24}

                />
                <Image
                    src="setting-2.svg"
                    alt='setting-icon'
                    width={24}
                    height={24}

                />
                <Image
                    src="/img icon.svg"
                    alt='img-icon'
                    width={24}
                    height={24}

                />
            </div>
        </nav>
    )
}

export default Nav
