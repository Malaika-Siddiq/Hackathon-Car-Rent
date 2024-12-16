import React from 'react'
import Image from 'next/image'

const Label = () => {
  return (
    <div>
      <div className='w-[1440px] h-[141px] grid justify-between p-8 bg-[#ffffff] fixed top'>

        <div className='w-[581px] h-10 gap-3'>
            {/* label logo */}
            <div className='inline-block'>
                <Image
                src="/command.jpg"
                alt="label logo"
                width={80}
                height={80}
                />
            </div>
            <p className='w-'>High Fidelity Dashboard - Home Rent</p>
        </div>

        {/* date */}

        <div>
            <p className='text-[#666666]'>Last Updated:</p>
            <p className='text-[#000000]'>8 Aug 2022</p>
        </div>


      </div>
    </div>
  )
}

export default Label
