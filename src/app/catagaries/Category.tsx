import React from 'react'
import Image from 'next/image'
import Card from '../component/Card'
import SliderDemo from '../component/Slider'
import Link from 'next/link'

const Category = () => {
  return (
    <main className='bg-[#F6F7F9] min-h-screen flex flex-col lg:flex-row'>
      {/* Sidebar Filter */}
      <div className="w-full lg:w-[250px] bg-white border-[#F3F5F7] border-[1px] p-4 lg:min-h-screen">
        {/* Type Section */}
        <div className="mb-8">
          <p className='text-[#90A3BF] font-semibold text-xs mb-4'>TYPE</p>
          <div className='space-y-4'>
            {[
              { label: 'Sport', count: 10 },
              { label: 'SUV', count: 12 },
              { label: 'Sedan', count: 16 },
              { label: 'MPV', count: 20 },
              { label: 'Coupe', count: 14 },
              { label: 'Hatchback', count: 14 }
            ].map((item) => (
              <label key={item.label} className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600"></div>
                <span className="text-gray-700 font-semibold text-base">{item.label}</span>
                <p className='text-[#90A3BF] font-semibold'>({item.count})</p>
              </label>
            ))}
          </div>
        </div>

        {/* Capacity Section */}
        <div className="mb-8">
          <p className='text-[#90A3BF] font-semibold text-xs mb-4'>CAPACITIES</p>
          <div className='space-y-4'>
            {[
              { label: '2 Person', count: 10 },
              { label: '4 Person', count: 14 },
              { label: '6 Person', count: 12 },
              { label: '8 or More', count: 16 }
            ].map((item) => (
              <label key={item.label} className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600"></div>
                <span className="text-gray-700 font-semibold text-base">{item.label}</span>
                <p className='text-[#90A3BF] font-semibold'>({item.count})</p>
              </label>
            ))}
          </div>
        </div>

        {/* Price Section */}
        <div className="space-y-4">
          <p className='text-[#90A3BF] font-semibold text-xs'>PRICE</p>
          <div className="w-full">
            <SliderDemo />
          </div>
          <p className='text-[#596780] font-semibold text-xl'>Max. $100.00</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Search Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Pickup Section */}
          <div className="flex-1 bg-white rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-3">
              <Image src='/mark.svg' alt='mark' width={16} height={16} />
              <p className='font-medium'>Pick-Up</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Location */}
              <div className="space-y-2">
                <h1 className='font-semibold'>Location</h1>
                <div className="flex justify-between items-center">
                  <p className='text-[#90A3BF] text-xs'>Select your city</p>
                  <Image src='/arrow-down.svg' alt='arrow' width={14} height={14} />
                </div>
              </div>

              {/* Date */}
              <div className="space-y-2 sm:border-x border-[#C3D4E966] sm:px-4">
                <h1 className='font-semibold'>Date</h1>
                <div className="flex justify-between items-center">
                  <p className='text-[#90A3BF] text-xs'>Select your date</p>
                  <Image src='/arrow-down.svg' alt='arrow' width={14} height={14} />
                </div>
              </div>

              {/* Time */}
              <div className="space-y-2">
                <h1 className='font-semibold'>Time</h1>
                <div className="flex justify-between items-center">
                  <p className='text-[#90A3BF] text-xs'>Select your time</p>
                  <Image src='/arrow-down.svg' alt='arrow' width={14} height={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Switch Icon */}
          <div className="flex justify-center items-center w-20">
            <Image src='/Switch.svg' alt='switch' width={100} height={100} />
          </div>

          {/* Drop-off Section */}
          <div className="flex-1 bg-white rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-3">
              <Image src='/mark-2.svg' alt='mark' width={16} height={16} />
              <p className='font-medium'>Drop-Off</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Location */}
              <div className="space-y-2">
                <h1 className='font-semibold'>Location</h1>
                <div className="flex justify-between items-center">
                  <p className='text-[#90A3BF] text-xs'>Select your city</p>
                  <Image src='/arrow-down.svg' alt='arrow' width={14} height={14} />
                </div>
              </div>

              {/* Date */}
              <div className="space-y-2 sm:border-x border-[#C3D4E966] sm:px-4">
                <h1 className='font-semibold'>Date</h1>
                <div className="flex justify-between items-center">
                  <p className='text-[#90A3BF] text-xs'>Select your date</p>
                  <Image src='/arrow-down.svg' alt='arrow' width={14} height={14} />
                </div>
              </div>

              {/* Time */}
              <div className="space-y-2">
                <h1 className='font-semibold'>Time</h1>
                <div className="flex justify-between items-center">
                  <p className='text-[#90A3BF] text-xs'>Select your time</p>
                  <Image src='/arrow-down.svg' alt='arrow' width={14} height={14} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Row 1 */}
          <Card
            name='Koenigsegg'
            heart='/heart-fill.svg'
            type='Sport'
            car='/car img-1.svg'
            liter='90L'
            people='2'
            price='99.00/'
          />

          <Link href='/detail'>
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

          {/* Row 2 */}
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

          {/* Row 3 */}
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
        </div>

        {/* Show More Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button className="w-full sm:w-auto bg-[#3563E9] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Show more car
          </button>
          <p className="text-[#90A3BF] text-sm">120 Car</p>
        </div>
      </div>
    </main>
  )
}

export default Category