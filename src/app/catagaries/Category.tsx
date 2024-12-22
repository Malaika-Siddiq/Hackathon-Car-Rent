import React from 'react'
import Image from 'next/image'
import Card from '../component/Card'
import SliderDemo from '../component/Slider'
import Link from 'next/link'


const Category = () => {
  return (
    <main className='bg-[#F6F7F9] w-[1440px] h-[1600px] flex' >
      <div className="w-[380px] h-full bg-[#FFFFFF] border-[#F3F5F7] border-[1px] flex-col space-y-4">

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

      {/* car card */}
      {/* main div */}
      <div className="">

        <div className="mt-7 mx-9 flex">

          {/* pickup  */}

          <div className="w-6/12 h-[132px] bg-[#FFFFFF] rounded-lg mr-7 px-10 py-5  space-y-3">

            <div className="flex gap-3">

              <Image
                src='/mark.svg'
                alt='mark'
                width={16}
                height={16}
              />
              <p className='font-jakarta font-medium'>Pick-Up</p>
            </div>


            {/* dropdown */}

            <div className="flex justify-between w-[450px]">

              {/* location */}

              <div className="space-y-2">
                <h1 className='font-semibold font-jakarta'>Location</h1>
                <div className="flex justify-between w-[110px] h-[20px]">
                  <p className='text-[#90A3BF] font-light text-xs '>Select your city</p>

                  <Image
                    src='/arrow-down.svg'
                    alt='arrow'
                    width={14}
                    height={14}


                  />

                </div>



              </div>

              {/* date */}
              <div className="">

                <div className="space-y-2 border-[#C3D4E966] px-8 border-l border-r">
                  <h1 className='font-semibold font-jakarta'>Date</h1>
                  <div className="flex justify-between w-[110px] h-[20px]">
                    <p className='text-[#90A3BF] font-light text-xs '>Select your date</p>

                    <Image
                      src='/arrow-down.svg'
                      alt='arrow'
                      width={14}
                      height={14} />

                  </div>



                </div>


              </div>

              {/* time */}

              <div className="space-y-2">
                <h1 className='font-semibold font-jakarta'>Time</h1>
                <div className="flex justify-between w-[110px] h-[20px]">
                  <p className='text-[#90A3BF] font-light text-xs '>Select your time</p>

                  <Image
                    src='/arrow-down.svg'
                    alt='arrow'
                    width={14}
                    height={14}


                  />

                </div>



              </div>




            </div>



          </div>

          {/* up,down div */}

          <div className="flex justify-center items-center absolute top-56 left-[850px] transform -translate-x-1/2 -translate-y-1/2  ">
            <Image
              src='/switch.svg'
              alt='switch'
              width={150}
              height={150}

            />

          </div>

          {/* drop off div */}
          <div className="w-6/12 h-[132px] bg-[#FFFFFF] rounded-lg ml-7 px-10 py-5  space-y-3 ">

            <div className="flex gap-3">

              <Image
                src='/mark-2.svg'
                alt='mark'
                width={16}
                height={16}
              />
              <p className='font-jakarta font-medium'>Drop-Off</p>
            </div>


            {/* dropdown */}

            <div className="flex justify-between w-[450px]">

              {/* location */}

              <div className="space-y-2">
                <h1 className='font-semibold font-jakarta'>Location</h1>
                <div className="flex justify-between w-[110px] h-[20px]">
                  <p className='text-[#90A3BF] font-light text-xs '>Select your city</p>

                  <Image
                    src='/arrow-down.svg'
                    alt='arrow'
                    width={14}
                    height={14}


                  />

                </div>



              </div>

              {/* date */}
              <div className="">

                <div className="space-y-2 border-[#C3D4E966] px-8 border-l border-r">
                  <h1 className='font-semibold font-jakarta'>Date</h1>
                  <div className="flex justify-between w-[110px] h-[20px]">
                    <p className='text-[#90A3BF] font-light text-xs '>Select your date</p>

                    <Image
                      src='/arrow-down.svg'
                      alt='arrow'
                      width={14}
                      height={14} />

                  </div>



                </div>


              </div>

              {/* time */}

              <div className="space-y-2">
                <h1 className='font-semibold font-jakarta'>Time</h1>
                <div className="flex justify-between w-[110px] h-[20px]">
                  <p className='text-[#90A3BF] font-light text-xs '>Select your time</p>

                  <Image
                    src='/arrow-down.svg'
                    alt='arrow'
                    width={14}
                    height={14}


                  />

                </div>



              </div>




            </div>



          </div>
        </div>


        {/* cars div */}

        <div className="mx-9 mt-5 flex flex-col justify-between">

          <div className=" flex justify-evenly my-5">

            <Card
              name='Koenigsegg'
              heart='/heart-fill.svg'
              type='Sport'
              car='/car img-1.svg'
              liter='90L'
              people='2'
              price='99.00/'
            />

            <Link href='/detail'><Card
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
          </div>


          {/*  */}

          <div className="flex justify-evenly my-5">
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


          {/*  */}

          <div className="flex justify-evenly my-5">

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

        </div>

        {/* show more button */}

        <div className="flex justify-between ml-72 mx-11 my-20 w-[734px] h-11  absolute left-[400px]">
          <button className="text-[#ffffff] bg-[#3563E9] rounded-[4px] w-[146px] h-[44px] ">Show more car</button>
          <p className="text-[#90A3BF] text-sm text-center mr-6">120Car</p>
        </div>




      </div>









    </main>

  )
}

export default Category
