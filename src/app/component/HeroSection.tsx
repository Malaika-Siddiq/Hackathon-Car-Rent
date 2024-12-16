import React from 'react'
import Image from 'next/image'
import Card from './Card'
import Link from 'next/link';

const HeroSection = () => {
  return (


    <div>
    <main className='bg-[#F6F7F9] w-full h-[2120px] gap-10 '>

      {/* div 3 */}
      <div className="w-full">
        {/* div 2 */}
        <div className="flex justify-between  mx-10">

          {/* car box-1 */}

          <div className='w-2/4 h-[360px] bg-[#54A6FF] rounded-lg mt-10  '>

            {/* buttons and paragraph */}


            <div className='w-[272px] h-56 flex flex-col justify-between mt-4 ml-6'>
              <div className="space-y-7">

                <h1 className=' text-[#FFFFFF] font-medium  text-4xl w-[300px] '>The Best Platform for Car Rental</h1>

                <p className='  text-[#FFFFFF] font-medium text-base '>Ease of doing a car rental safely and reliably. Of course at a low price.</p>

                <button className='w-[120px]  h-11  text-[#FFFFFF] bg-[#3563E9] rounded-[4px] px-5 gap-2'>Rental Car</button>
              </div>



            </div>
            <div className="relative top-6 left-40 ">
              <Image
                src="/car img-1.svg"
                alt='car'
                width={300}
                height={300}
              />
            </div>
          </div>


          {/* car box-2 */}



          <div className='w-2/4 h-[360px] bg-[#3563E9] rounded-lg mt-10 ml-14 '>

            {/* buttons and paragraph */}


            <div className='w-[272px] h-56 flex flex-col justify-between mt-4 ml-6'>
              <div className="space-y-7">

                <h1 className=' text-[#FFFFFF] font-medium  text-4xl w-[300px] '>Easy way to rent a car at a low price</h1>

                <p className='  text-[#FFFFFF] font-medium text-base '>Providing cheap car rental services and safe and comfortable facilities.</p>

                <button className='w-[120px]  h-11  text-[#FFFFFF] bg-[#54A6FF] rounded-[4px] px-5 gap-2'>Rental Car</button>
              </div>



            </div>
            <div className="relative top-2 left-40 ">
              <Image
                src="/car img-2.svg"
                alt='car'
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>

        {/* pickup,drop off main div*/}

        <div className="mt-7 mx-9 flex">

          {/* pickup  */}

          <div className="w-6/12 h-[132px] bg-[#FFFFFF] rounded-lg  px-10 py-5  space-y-3">

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

          <div className="flex justify-center items-center">

            <Image
              src='/switch.svg'
              alt='switch'
              width={200}
              height={200} />

          </div>

                                                 {/* drop off div */}
          <div className="w-6/12 h-[132px] bg-[#FFFFFF] rounded-lg  px-10 py-5  space-y-3 ">

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

      </div>


      {/* cards main div */}
      <div className="mt-5 mx-11">

        {/* popular car cards */}

        <div className='w-[1312px] h-[452px]'>
          <div className="mb-5  flex justify-between"><p className='text-[#90A3BF] pl-5'>Popular Car</p> 
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

<Link href='/catagaries'> <Card
         name='Nissan GT - R'
         heart='/non-fill heart.svg'
         type='Sport'
         car='/car img-2.svg'
         liter='80L'
         people='2'
         price='80.00/'
         discount='$100.00'
         /></Link>

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

        {/* recomended car cards */}


          {/* div-1*/}
          <div className='w-[1312px] h-[452px]'>
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
       
          

          {/* div-3 */}

          <div className="flex justify-between">
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
       

       

      </div>


      {/* show more button */}

      <div className="flex justify-between ml-72 mx-11 my-20 w-[734px] h-11  relative left-1/4">
       <button className="text-[#ffffff] bg-[#3563E9] rounded-[4px] w-[146px] h-[44px] ">Show more car</button>
        <p className="text-[#90A3BF] text-sm text-center mr-6">120Car</p>
      </div>



    </main>
    </div>
  )
}

export default HeroSection
