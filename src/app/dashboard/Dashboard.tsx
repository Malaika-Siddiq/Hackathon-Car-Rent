import React from 'react'
import Image from 'next/image'

const Dashboard = () => {
  return (
    <div>
      <main className="w-[1440px] h-[900px]  bg-[#F6F7F9] flex justify-between">
        {/* side bar */}
        <div className="w-[300px] h-full bg-[#FFFFFF]  border-[#F3F5F7] border-[1px]  flex flex-col space-y-24 p-7">

          {/* main menu */}
          <div className="flex flex-col gap-8">

            <div className='ml-4'><p className='text-[#90A3BF] font-semibold text-xs'>MAIN MENU</p></div>


            <div className="w-[254px] h-[56px] bg-[#3563E9] flex items-center rounded-xl pl-4">
              <Image
                src={'/home.svg'}
                alt='home'
                width={24}
                height={24}
              />
              <p className='font-medium text-base text-white ml-3'>Dashboard</p>
            </div>

            <div className="  flex items-center rounded-lg pl-4">
              <Image
                src={'/dash-car.svg'}
                alt='car'
                width={24}
                height={24}
              />
              <p className='font-medium text-base text-[#90A3BF] ml-3'>Car Rent</p>
            </div>

            <div className=" flex items-center rounded-lg pl-4">
              <Image
                src={'/chart.svg'}
                alt='chart'
                width={24}
                height={24}
              />
              <p className='font-medium text-base text-[#90A3BF] ml-3'>Insight</p>
            </div>

            <div className="  flex items-center rounded-lg pl-4">
              <Image
                src={'/empty-wallet-change.svg'}
                alt='wallet'
                width={24}
                height={24}
              />
              <p className='font-medium text-base text-[#90A3BF] ml-3'>Reimburse</p>
            </div>

            <div className=" flex items-center rounded-lg pl-4">
              <Image
                src={'/message.svg'}
                alt='message'
                width={24}
                height={24}
              />
              <p className='font-medium text-base text-[#90A3BF] ml-3'>Inbox</p>
            </div>

            <div className=" flex items-center rounded-lg pl-4">
              <Image
                src={'/calendar.svg'}
                alt='calendar'
                width={24}
                height={24}
              />
              <p className='font-medium text-base text-[#90A3BF] ml-3 '>Calender</p>
            </div>


          </div>



          {/* PREFERENCE */}
          <div className='  flex flex-col gap-8'>

            <p className='text-[#90A3BF] font-semibold text-xs ml-4'  >PREFERENCES</p>

            <div className="  flex items-center rounded-lg pl-4">
              <Image
                src={'/dash-setting.svg'}
                alt='car'
                width={24}
                height={24}
              />
              <p className='font-medium text-base text-[#90A3BF] ml-3'>Setting</p>
            </div>

            <div className="  flex items-center rounded-lg pl-4">
              <Image
                src={'/info-circle.svg'}
                alt='car'
                width={24}
                height={24}
              />
              <p className='font-medium text-base text-[#90A3BF] ml-3'>Help & Centre</p>
            </div>

            <div className=" w-auto flex items-center rounded-lg pl-4 justify-between">
              <div className='flex'>
                <Image
                  src={'/briefcase.svg'}
                  alt='car'
                  width={24}
                  height={24}
                />
                <p className='font-medium text-base text-[#90A3BF] ml-3 '>Dark Mode</p></div>

              <div className="">
                <Image
                  src={'/dark mode.svg'}
                  alt='car'
                  width={68}
                  height={34}

                />
              </div>

            </div>

          </div>


          {/*log out  */}

          <div className="w-[104px] h-[28px] flex justify-between ml-4">

            <Image
              src={'/logout.svg'}
              alt='car'
              width={24}
              height={24}
            />

            <p className="font-medium text-base text-[#90A3BF]">Log Out</p>

          </div>





        </div>


        {/* map divs */}

        <div className="w-[520px] h-[836px] bg-white border rounded-xl p-5  mt-7 flex flex-col gap-4">

          <p className="font-semibold text-lg">Details Rental</p>

          <Image
            src={'/maps.svg'}
            alt='map'
            width={486}
            height={272}


          />

          <div className="flex items-center space-x-5">
            <div className="">
              <Image
                src={'/car-look.svg'}
                alt='car'
                width={132}
                height={62}
              />



            </div>

            <div className="space-y-2">
              <div className="flex space-x-40 ">

                <p className="font-bold text-xl">Nissan GT-R</p>
                <p className="font-medium text-sm text-[#3D5278] ">#9761</p>

              </div>

              <div className="text-[#3D5278] text-sm font-medium">Sport Car</div>
            </div>


          </div>

          {/* pick up */}

          <div className="">
            <div className="w-6/12 h-[132px] bg-[#FFFFFF] rounded-lg mr-7  py-5  space-y-3">

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
                    <p className='text-[#90A3BF] font-light text-xs '>Kota Semarang</p>

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
                      <p className='text-[#90A3BF] font-light text-xs '>20 July 2022</p>

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
                    <p className='text-[#90A3BF] font-light text-xs '>7:00 </p>

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

            {/* drop off */}

            <div className="w-6/12 h-[132px] bg-[#FFFFFF] rounded-lg  py-5  space-y-3 ">

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
                    <p className='text-[#90A3BF] font-light text-xs '>Kota Semarang</p>

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
                      <p className='text-[#90A3BF] font-light text-xs '>21 July 2022</p>

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
                    <p className='text-[#90A3BF] font-light text-xs '>1:00</p>

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

          <div className="flex justify-between">

            {/* rental summary */}
            <div className="">
              <p className="font-bold text-lg">Rental Summary</p>
              <p className="font-normal text-sm text-[#90A3BF]">Overall price and includes rental discount</p>
            </div>
            <div className="">
              <p className="text-2xl font-semibold ">$80.00</p>
            </div>
          </div>

        </div>

        {/* top rental */}
        {/* div 1 */}
        <div className="flex flex-col gap-10 mt-7 mr-4">
          <div className="">
            <Image
              src={'/top 5 car rental.svg'}
              alt='top 5 car'
              width={500}
              height={324}


            />
          </div>

          {/* recent transation */}
          <div className="w-[524px] p-5 bg-white rounded-xl space-y-11 mr-3">
            <div className=" flex justify-between">
              <p className="font-semibold text-xl ">Recent Transaction</p>
              <p className="text-blue-700">View All</p>
            </div>

            {/* car 1 */}

            <div className="flex items-center space-x-5 border-b-2">
              <div className="">
                <Image
                  src={'/car img-2.svg'}
                  alt='car'
                  width={132}
                  height={62}
                />



              </div>

              <div className="space-y-2">
                <div className="flex space-x-40">

                  <p className="font-bold text-xl">Nissan GT-R</p>
                  <p className="font-medium text-xs text-[#3D5278]">20 July</p>

                </div >

                <div className="flex justify-between">
                  <div className="text-[#3D5278] text-sm font-medium">Sports Car</div>
                  <p className=" font-bold">$80.00</p>
                </div>
              </div>


            </div>
            {/* car 2 */}

            <div className="flex items-center space-x-5 border-b-2">
              <div className="">
                <Image
                  src={'/car img-1.svg'}
                  alt='car'
                  width={132}
                  height={62}
                />



              </div>

              <div className="space-y-2">
                <div className="flex space-x-40 ">

                  <p className="font-bold text-xl">Nissan GT-R</p>
                  <p className="font-medium text-xs text-[#3D5278] ">19 July</p>

                </div >

                <div className="flex justify-between">
                  <div className="text-[#3D5278] text-sm font-medium">Sports Car</div>
                  <p className=" font-bold">$99.00</p>
                </div>
              </div>


            </div>

            {/* car 3 */}
            <div className="flex items-center space-x-5 border-b-2">
              <div className="">
                <Image
                  src={'/rolls.svg'}
                  alt='car'
                  width={132}
                  height={62}
                />



              </div>

              <div className="space-y-2">
                <div className="flex space-x-40 ">

                  <p className="font-bold text-xl">Nissan GT-R</p>
                  <p className="font-medium text-xs text-[#3D5278] ">18 July</p>

                </div >

                <div className="flex justify-between">
                  <div className="text-[#3D5278] text-sm font-medium">Sports Car</div>
                  <p className=" font-bold">$96.00</p>
                </div>
              </div>


            </div>

            {/* car 4 */}

            <div className="flex items-center space-x-5">
              <div className="">
                <Image
                  src={'/cr-b.svg'}
                  alt='car'
                  width={132}
                  height={62}
                />



              </div>

              <div className="space-y-2">
                <div className="flex space-x-40 ">

                  <p className="font-bold text-xl">Nissan GT-R</p>
                  <p className="font-medium text-xs text-[#3D5278] ">17 July</p>

                </div >

                <div className="flex justify-between">
                  <div className="text-[#3D5278] text-sm font-medium">SUV</div>
                  <p className=" font-bold">$80.00</p>
                </div>
              </div>


            </div>

          </div>

        </div>

      </main>
    </div>
  )
}

export default Dashboard
