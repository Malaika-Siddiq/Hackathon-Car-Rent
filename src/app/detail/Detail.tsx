import React from 'react'
import Image from 'next/image'

import Card from '../component/Card'
import SliderDemo from '../component/Slider'
import Link from 'next/link'

const Detail = () => {
  return (
    <div className=''>


      <div className='flex  bg-[#F6F7F9] '>



        <div className="w-[330px] h-[2016px] bg-[#FFFFFF] border-[#F3F5F7] border-[1px] flex-col space-y-4">

          {/* type */}
          <div className="flex-col justify-evenly w-[176px] h-[304px] ml-5 mt-5 space-y-5">
            <div className='ml-4'><p className='text-[#90A3BF] font-semibold text-xs'>TYPE</p></div>

            <div className='flex-col space-y-4'>

              <label className="flex items-center space-x-3">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600"></div>
                <span className="text-gray-700 font-semibold text-base">Sport</span><p className='text-[#90A3BF] font-semibold'>(10)</p>
              </label>

              <label className="flex items-center space-x-3">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600"></div>
                <span className="text-gray-700 font-semibold text-base">SUV</span><p className='text-[#90A3BF] font-semibold'>(12)</p>
              </label>

              <label className="flex items-center space-x-3">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600"></div>
                <span className="text-gray-700 font-semibold text-base">Sedan</span><p className='text-[#90A3BF] font-semibold'>(16)</p>
              </label>

              <label className="flex items-center space-x-3">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600"></div>
                <span className="text-gray-700 font-semibold text-base">MPV</span><p className='text-[#90A3BF] font-semibold'>(20)</p>
              </label>

              <label className="flex items-center space-x-3">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600"></div>
                <span className="text-gray-700 font-semibold text-base">Coupe</span><p className='text-[#90A3BF] font-semibold'>(14)</p>
              </label>

              <label className="flex items-center space-x-3">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600"></div>
                <span className="text-gray-700 font-semibold text-base">Hatchback</span><p className='text-[#90A3BF] font-semibold'>(14)</p>
              </label>

            </div>


          </div>

          {/* capacity */}

          <div className="flex-col justify-evenly w-[176px] h-[230px] ml-5 mt-5 space-y-5">
            <div className='ml-4'><p className='text-[#90A3BF] font-semibold text-xs'>CAPACITIES</p></div>

            <div className='flex-col space-y-4'>

              <label className="flex items-center space-x-3">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600"></div>
                <span className="text-gray-700 font-semibold text-base">2 Person</span><p className='text-[#90A3BF] font-semibold'>(10)</p>
              </label>

              <label className="flex items-center space-x-3">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600"></div>
                <span className="text-gray-700 font-semibold text-base">4 Person</span><p className='text-[#90A3BF] font-semibold'>(14)</p>
              </label>

              <label className="flex items-center space-x-3">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600"></div>
                <span className="text-gray-700 font-semibold text-base">6 Person</span><p className='text-[#90A3BF] font-semibold'>(12)</p>
              </label>

              <label className="flex items-center space-x-3">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600"></div>
                <span className="text-gray-700 font-semibold text-base">8 or More</span><p className='text-[#90A3BF] font-semibold'>(16)</p>
              </label>

            </div>

          </div>

          {/* price */}

          <div className="ml-5 space-y-5">
            <div className=""><p className='text-[#90A3BF] font-semibold text-xs'>PRICE</p></div>
            {/* image */}
            <div className="">

              <SliderDemo />


            </div>

            {/* max */}

            <div className=""><p className='text-[#596780] font-semibold text-xl'>Max. $100.00</p></div>


          </div>


        </div>

        {/* detail div */}

        <div className="">
          <div className="my-9 mx-6 flex justify-between w-[1020px] h-auto">

            {/* image div */}

            <div className="w-[492px] h-[508px] ">

              {/* img 1 div */}

              <div className="mb-4">
                <Image
                  src={'/car-text.svg'}
                  alt='car'
                  width={492}
                  height={360}
                />
              </div>

              {/* small img */}

              <div className="flex justify-between">

                <div>
                  <Image
                    src={'/sm car-1.svg'}
                    alt='car'
                    width={148}
                    height={124}

                  />
                </div>

                <div>
                  <Image
                    src={'/sm car-2.svg'}
                    alt='car'
                    width={148}
                    height={124}

                  />
                </div>
                <div>
                  <Image
                    src={'/sm car-3.svg'}
                    alt='car'
                    width={148}
                    height={124}

                  />
                </div>


              </div>


            </div>

            {/* detail card */}

            <div className="bg-[#FFFFFF] border-[1px] border-[#F3F5F7] rounded-xl w-[492px] h-[500px] p-7  flex flex-col gap-8">
              <div className="flex justify-between">
                <div className="w-[220px] h-[72px]  ">
                  <p className='font-bold text-3xl font-jakarta mb-2'>Nissan GT - R</p>

                  <div className="flex ">
                    <Image
                      src={'/review star.svg'}
                      alt='review'
                      width={108}
                      height={20}

                    />
                    <p className='text-[#596780] text-sm ml-1'>440+ Reviewer</p>

                  </div>


                </div>


                {/* heart icon */}

                <div className="">
                  <Image
                    src={'/heart-fill.svg'}
                    alt='heart'
                    width={24}
                    height={24}
                  />


                </div>
              </div>


              {/* text */}

              <div className="w-[444px] h-[100px]">
                <p className="text-[#596780] text-xl font-normal">NISMO has become the embodiment of Nissans outstanding performance, inspired by the most unforgiving proving ground, the race track.</p>
              </div>

              {/* type div */}

              <div className="w-[430px] h-[72px] space-y-3 ">
                <div className="flex justify-between">
                  <p className="text-[#90A3BF] text-xl font-normal">Type Car</p>
                  <p className="text-[#596780] text-xl font-semibold">Sport</p>
                  <p className="text-[#90A3BF] text-xl font-normal">Capacity</p>
                  <p className="text-[#596780] text-xl font-semibold">2 Person</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-[#90A3BF] text-xl font-normal">Steering</p>
                  <p className="text-[#596780] text-xl font-semibold">Manual</p>
                  <p className="text-[#90A3BF] text-xl font-normal">Gasoline</p>
                  <p className="text-[#596780] text-xl font-semibold">70L</p>
                </div>
              </div>


              {/* price */}

              <div className="flex justify-between mt-12 ">
                <div className="flex-col  ">
                  <p className="text-[#1A202C] font-jakarta font-bold text-3xl ">$80.00/<span className='text-xs text-[#90A3BF] '>day</span></p>
                  <p className="text-[#90A3BF] font-bold text-sm line-through">$100.00</p>
                </div>

                <Link href='/payment'> <button className='bg-[#3563E9] text-[#FFFFFF] px-1 py-3 rounded-[4px] w-[116px] h-[44px] text-center'>Rent Now</button></Link>

              </div>

            </div>



          </div>




          {/* comments div */}

          <div className="w-[1016px] h-[452px] bg-[#FFFFFF] border rounded-xl mx-6 p-6  ">

            {/* reviews main */}

            <div className="flex flex-col gap-5">

              <div className="w-[136px] h-7 flex justify-between">
                <p className='text-xl font-semibold'>Reviews</p>
                <div className="bg-[#3563E9] rounded-lg w-11 h-7 text-white text-center ">13</div>
              </div>

              {/* review-1*/}

              <div className="w-[968px] h-[124px] flex">
                {/* img div */}
                <div className="">
                  <Image
                    src={'/img icon.svg'}
                    alt='img'
                    width={80}
                    height={80}
                  />

                </div>


                {/* text */}
                <div className="flex flex-col gap-2 ml-4">

                  {/* date */}

                  <div className="flex justify-between">
                    <h1 className="font-bold text-xl">Alex Stanton</h1>
                    <p className="font-medium text-sm text-[#90A3BF]">21 July 2022</p>
                  </div>

                  {/* stars */}

                  <div className="flex justify-between">
                    <p className="text-[#90A3BF] font-medium text-sm ">CEO at Bukalapak</p>
                    <Image
                      src={'/review star.svg'}
                      alt='star'
                      width={108}
                      height={20}

                    />

                  </div>


                  {/* paragraph */}
                  <div className="">
                    <p className='text-[#596780] font-normal text-sm'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                  </div>
                </div>



              </div>


              {/* review-2 */}

              <div className="w-[968px] h-[124px] flex mb-7">
                {/* img div */}
                <div className="">
                  <Image
                    src={'/review girl.svg'}
                    alt='img'
                    width={80}
                    height={80}
                  />

                </div>


                {/* text */}
                <div className="flex flex-col gap-2 ml-4">

                  {/* date */}

                  <div className="flex justify-between">
                    <h1 className="font-bold text-xl">Skylar Dias</h1>
                    <p className="font-medium text-sm text-[#90A3BF]">20 July 2022</p>
                  </div>

                  {/* stars */}

                  <div className="flex justify-between">
                    <p className="text-[#90A3BF] font-medium text-sm ">CEO at Amazon</p>
                    <Image
                      src={'/review star.svg'}
                      alt='star'
                      width={108}
                      height={20}

                    />

                  </div>


                  {/* paragraph */}
                  <div className="">
                    <p className='text-[#596780] font-normal text-sm'>We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                  </div>
                </div>



              </div>




            </div>

            {/* show all */}
            <div className="flex justify-center ">
              <div className="flex w-[132px] h-11  text-center p-2">

                <select  className='text-[#90A3BF] text-base font-semibold outline-none'>
                  <option>Show All</option>
                </select>

              </div>
            </div>

          </div>



          {/* cars div 1 */}

          <div className='mx-6 my-6 h-[452px]'>

            <div className="mb-5  flex justify-between"><p className='text-[#90A3BF] pl-5'>Recent Car</p>
              <p className='text-[#3563E9] text-base text-center pr-5 font-semibold'>View All</p>
            </div>
            <div className="flex justify-between">
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


          {/* car div 2 */}

          <div className='h-[452px] mx-6'>
            <div className="mb-5  flex justify-between"><p className='text-[#90A3BF] pl-5'>Recomendation Car</p>

            </div>

            {/* div-2 */}

            <div className="flex justify-between">
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
