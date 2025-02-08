import React from 'react'
import Image from 'next/image'
import Card from './Card'
import Link from 'next/link'
import Cardapi from '../Cars/page'

const HeroSection = () => {
  return (
    <div>
      <main className='bg-[#F6F7F9] w-full min-h-screen px-4 sm:px-6 lg:px-8 py-8'>
        <div className="w-full">
          {/* Hero Cards */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            {/* Car box-1 */}
            <div className='w-full lg:w-1/2 bg-[#54A6FF] rounded-lg p-6 relative overflow-hidden min-h-[360px]'>
              <div className='relative z-10 max-w-sm'>
                <div className="space-y-4 lg:space-y-7">
                  <h1 className='text-white font-medium text-2xl sm:text-3xl lg:text-4xl'>The Best Platform for Car Rental</h1>
                  <p className='text-white font-medium text-sm sm:text-base'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                  <button className='w-[120px] h-11 text-white bg-[#3563E9] rounded-[4px] px-5'>Rental Car</button>
                </div>
              </div>
              <div className="absolute bottom-5 right-5 w-2/3 lg:w-1/2 ">
                <Image
                  src="/car img-1.svg"
                  alt='car'
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Car box-2 */}
            <div className='w-full lg:w-1/2 bg-[#3563E9] rounded-lg p-6  relative overflow-hidden min-h-[360px]'>
              <div className='relative z-10 max-w-sm'>
                <div className="space-y-4 lg:space-y-7">
                  <h1 className='text-white font-medium text-2xl sm:text-3xl lg:text-4xl'>Easy way to rent a car at a low price</h1>
                  <p className='text-white font-medium text-sm sm:text-base'>Providing cheap car rental services and safe and comfortable facilities.</p>
                  <button className='w-[120px] h-11 text-white bg-[#54A6FF] rounded-[4px] px-5'>Rental Car</button>
                </div>
              </div>
              <div className="absolute bottom-5 right-5 w-2/3 lg:w-1/2 ">
                <Image
                  src="/car img-2.svg"
                  alt='car'
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Pickup/Drop-off Section */}
          <div className="mt-8 flex flex-col lg:flex-row gap-6">
            {/* Pickup */}
            <div className="w-full lg:w-[45%] bg-white rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Image src='/mark.svg' alt='mark' width={16} height={16} />
                <p className='font-medium'>Pick-Up</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Location */}
                <div className="space-y-2">
                  <h1 className='font-semibold'>Location</h1>
                    <select name="" id="" className='text-[#90A3BF] text-xs '>
                        <option value="" >select your city</option>
                        <option value="">karachi </option>
                        <option value="">Hyderabad</option>
                    </select>
                  
                </div>

                {/* Date */}
                <div className="space-y-2 sm:border-x border-[#C3D4E966] sm:px-4">
                  <h1 className='font-semibold'>Date</h1>
                  <select name="" id="" className='text-[#90A3BF] text-xs '>
                        <option value="" >select your Date</option>
                        <option value="">5/6/2025</option>
                        <option value="">5/7/2025</option>
                    </select>
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <h1 className='font-semibold'>Time</h1>
                  <select name="" id="" className='text-[#90A3BF] text-xs '>
                        <option value="" >select your Time</option>
                        <option value="">9:00 am </option>
                        <option value="">12:00 am</option>
                    </select>
                </div>
              </div>
            </div>

            {/* Switch Button */}
            <div className="hidden lg:flex items-center justify-center w-[10%]">
              <Image src='/switch.svg' alt='switch' width={200} height={200} />
            </div>

            {/* Drop-off */}
            <div className="w-full lg:w-[45%] bg-white rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Image src='/mark-2.svg' alt='mark' width={16} height={16} />
                <p className='font-medium'>Drop-Off</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Location */}
                <div className="space-y-2">
                  <h1 className='font-semibold'>Location</h1>
                  <select name="" id="" className='text-[#90A3BF] text-xs '>
                        <option value="" >select your city</option>
                        <option value="">karachi </option>
                        <option value="">Hyderabad</option>
                    </select>
                </div>

                {/* Date */}
                <div className="space-y-2 sm:border-x border-[#C3D4E966] sm:px-4">
                  <h1 className='font-semibold'>Date</h1>
                  <select name="" id="" className='text-[#90A3BF] text-xs '>
                        <option value="" >select your Date</option>
                        <option value="">2/1/2025 </option>
                        <option value="">4/7/2025</option>
                    </select>
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <h1 className='font-semibold'>Time</h1>
                  <select name="" id="" className='text-[#90A3BF] text-xs '>
                        <option value="" >select your Time</option>
                        <option value="">7:00pm </option>
                        <option value="">6:00pm</option>
                    </select>
                </div>
              </div>
            </div>
          </div>

          {/* Car Cards Section */}
          {/* <div className="mt-8">
            {/* Popular Cars */}
            {/* <div className='w-full mb-12'>
              <div className="flex justify-between items-center mb-6">
                <p className='text-[#90A3BF]'>Popular Car</p>
                <p className='text-[#3563E9] font-semibold'>View All</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card
                  name='Koenigsegg'
                  heart='/heart-fill.svg'
                  type='Sport'
                  car='/car img-1.svg'
                  liter='90L'
                  people='2'
                  price='99.00/'
                />
                <Link href='/catagaries'>
                  <Card
                    name='Nissan GT - R'
                    heart='/non-fill heart.svg'
                    type='Sport'
                    car='/car img-2.svg'
                    liter='80L'
                    people='2'
                    price='80.00/'
                    discount='$100.00'
                  />
                </Link>
                <Card
                  name='Rolls - Royce'
                  heart='/heart-fill.svg'
                  type='Sedan'
                  car='/rolls.svg'
                  liter='70L'
                  people='4'
                  price='96.00/'
                />
                <Card
                  name='Nissan GT - R'
                  heart='/non-fill heart.svg'
                  type='Sport'
                  car='/car img-2.svg'
                  liter='80L'
                  people='2'
                  price='80.00/'
                  discount='$100.00'
                />
              </div>
            </div>

            {/* Recommendation Cars */}
            {/* <div className='w-full mb-12'>
              <div className="flex justify-between items-center mb-6">
                <p className='text-[#90A3BF]'>Recommendation Car</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card
                  name='All New Rush'
                  heart='/non-fill heart.svg'
                  type='SUV'
                  car='/rush.svg'
                  liter='70L'
                  people='6'
                  price='72.00/'
                  discount='$80.00'
                />
                <Card
                  name='CR - V'
                  heart='/heart-fill.svg'
                  type='SUV'
                  car='/cr.svg'
                  liter='80L'
                  people='6'
                  price='80.00/'
                />
                <Card
                  name='All New Terios'
                  heart='/non-fill heart.svg'
                  type='SUV'
                  car='/terios.svg'
                  liter='90L'
                  people='6'
                  price='74.00/'
                />
                <Card
                  name='CR - V'
                  heart='/heart-fill.svg'
                  type='SUV'
                  car='/cr-b.svg'
                  liter='80L'
                  people='6'
                  price='80.00/'
                />
              </div>
            </div>

            {/* Additional Cars */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card
                name='MG ZX Exclusiceg'
                heart='/heart-fill.svg'
                type='Hatchback'
                car='/mg.svg'
                liter='70L'
                people='4'
                price='76.00/'
                discount='$80.00'
              />
              <Card
                name='New MG ZS'
                heart='/non-fill heart.svg'
                type='SUV'
                car='/mg zs.svg'
                liter='80L'
                people='6'
                price='80.00/'
              />
              <Card
                name='MG ZX Excite'
                heart='/heart-fill.svg'
                type='Hatchback'
                car='/mg.svg'
                liter='90L'
                people='4'
                price='74.00/'
              />
              <Card
                name='New MG ZS'
                heart='/non-fill heart.svg'
                type='SUV'
                car='/mg grey.svg'
                liter='80L'
                people='6'
                price='80.00/'
              />
            </div>
          </div>  */}

          <Cardapi/>

          {/* Show More Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8">
            <button className="text-white bg-[#3563E9] rounded-[4px] px-6 py-3 w-full sm:w-auto">
              Show more car
            </button>
            <p className="text-[#90A3BF] text-sm">120 Car</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HeroSection



