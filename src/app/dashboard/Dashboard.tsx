import React from 'react'
import Image from 'next/image'

const Dashboard = () => {
  return (
    <div>
      <main className="w-[1440px] h-[900px] bg-[#F6F7F9] flex">
        {/* side bar */}
          <div className="w-[380px] h-full bg-[#FFFFFF]  border-[#F3F5F7] border-[1px]  flex flex-col space-y-24 p-7">
        
                {/* main menu */}
                <div className="flex flex-col gap-8">

                <div className='ml-4'><p className='text-[#90A3BF] font-semibold text-xs'>MAIN MENU</p></div>

                {/* <div className=""> */}
                  <div className="w-[254px] h-[56px] bg-[#3563E9] flex items-center rounded-lg pl-4">
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

                  {/* </div> */}

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

              <div className="w-[534px] h-[836px] bg-white border rounded-lg p-5">

                <p className="font-semibold text-lg">Details Rental</p>

                <Image
                src={'/maps.svg'}
                alt='map'
                width={486}
                height={272}
                
                
                />

               <div className="flex items-center">
               <div className="">
                <Image
                src={'/car-look.svg'}
                alt='car'
                width={132}
                height={62}
                />

             
                  
                </div>
                <div className="flex justify-between">

                  <p className="font-bold text-xl">Nissan GT-R</p>
                  <p className="font-medium text-sm text-[#3D5278]">#9761</p>
                      
                </div>

               
               </div>

              

              </div>

      </main>
    </div>
  )
}

export default Dashboard
