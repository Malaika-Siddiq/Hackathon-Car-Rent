

import React from 'react'
import Image from 'next/image'
import Card from '../component/Card'
import SliderDemo from '../component/Slider'
import Link from 'next/link'

const Detail = () => {
  return (
    <div className='min-h-screen bg-[#F6F7F9]'>
      <div className='flex flex-col lg:flex-row'>
        {/* Sidebar Filter */}
        <div className="w-full lg:w-[300px] bg-[#FFFFFF] border-[#F3F5F7] border-[1px] p-4">
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
          {/* Car Details Section */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Car Images */}
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="relative w-full h-[360px]">
                <Image
                  src="/car-text.svg"
                  alt="car"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {['/sm car-1.svg', '/sm car-2.svg', '/sm car-3.svg'].map((src, index) => (
                  <div key={index} className="relative h-[124px]">
                    <Image
                      src={src}
                      alt={`car view ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Car Details Card */}
            <div className="w-full lg:w-1/2 bg-white border border-[#F3F5F7] rounded-xl p-6 space-y-12">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Nissan GT - R</h2>
                  <div className="flex items-center gap-2">
                    <Image src="/review star.svg" alt="review" width={108} height={20} />
                    <p className="text-[#596780] text-sm">440+ Reviewer</p>
                  </div>
                </div>
                <button>
                  <Image src="/heart-fill.svg" alt="favorite" width={24} height={24} />
                </button>
              </div>

              <p className="text-[#596780] text-base md:text-xl">
                NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track.
              </p>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-5 justify-between">
                <div className="flex justify-between">
                  <span className="text-[#90A3BF]">Type Car</span>
                  <span className="text-[#596780] font-semibold">Sport</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#90A3BF]">Capacity</span>
                  <span className="text-[#596780] font-semibold">2 Person</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#90A3BF]">Steering</span>
                  <span className="text-[#596780] font-semibold">Manual</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#90A3BF]">Gasoline</span>
                  <span className="text-[#596780] font-semibold">70L</span>
                </div>
              </div>

              {/* Price and Rent Button */}
              <div className="flex justify-between items-center pt-4">
                <div>
                  <p className="text-2xl md:text-3xl font-bold">
                    $80.00/<span className="text-xs text-[#90A3BF]">day</span>
                  </p>
                  <p className="text-[#90A3BF] text-sm line-through">$100.00</p>
                </div>
                <Link href="/payment">
                  <button className="bg-[#3563E9] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white rounded-xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-xl font-semibold">Reviews</h3>
              <span className="bg-[#3563E9] text-white px-3 py-1 rounded-lg">13</span>
            </div>

            <div className="space-y-6">
              {/* Review Items */}
              {[
                {
                  name: 'Alex Stanton',
                  role: 'CEO at Bukalapak',
                  date: '21 July 2022',
                  image: '/img icon.svg'
                },
                {
                  name: 'Skylar Dias',
                  role: 'CEO at Amazon',
                  date: '20 July 2022',
                  image: '/review girl.svg'
                }
              ].map((review, index) => (
                <div key={index} className="flex gap-4">
                  <Image src={review.image} alt={review.name} width={80} height={80} />
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-bold">{review.name}</h4>
                      <p className="text-[#90A3BF] text-sm">{review.date}</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p className="text-[#90A3BF] text-sm">{review.role}</p>
                      <Image src="/review star.svg" alt="rating" width={108} height={20} />
                    </div>
                    <p className="text-[#596780] text-sm">
                      We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <select className="text-[#90A3BF] text-base font-semibold outline-none cursor-pointer">
                <option>Show All</option>
              </select>
            </div>
          </div>

          {/* Recent Cars Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#90A3BF]">Recent Car</h3>
              <button className="text-[#3563E9] font-semibold">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                name='Koenigsegg'
                heart='/heart-fill.svg'
                type='Sport'
                car='/car img-1.svg'
                liter='90L'
                people='2'
                price='99.00/'
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
              <Card
                name='Rolls - Royce'
                heart='/heart-fill.svg'
                type='Sedan'
                car='/rolls.svg'
                liter='70L'
                people='4'
                price='96.00/'
              />
            </div>
          </div>

          {/* Recommended Cars Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#90A3BF]">Recommended Car</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail

