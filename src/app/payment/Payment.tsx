import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Payment = () => {
  return (
    <div className=''>
      <main className='w-[1440px] h-[2100px] bg-[#F6F7F9] flex justify-between  p-6'>


        {/* main div of payment */}
        <div className="w-[852px] h-full flex flex-col gap-4">

          {/*biling info  */}
          <div className="w-[852px] h-[336px] rounded-lg bg-[#FFFFFF] p-7 flex flex-col gap-10">
            <div className="">
              <div className="text-xl font-semibold font-jakarta">Billing Info</div>
              <div className="flex justify-between">
                <p className="text-[#90A3BF] text-sm font-md ">Please enter your billing info</p>
                <p className="text-[#90A3BF] text-sm font-md">Step 1 of 4</p>
              </div>
            </div>

            {/* input divs */}

            <div className="flex flex-col gap-6">
              <div className="flex">

                <div className="grid w-full max-w-sm items-center gap-2">
                  <label htmlFor="text" className='font-semibold text-base' >Name</label>
                  <input type="text" id="name" placeholder="Your name" className=' w-[340px] h-[50px]  outline-none bg-[#F6F7F9] font-md text-sm py-3 pl-6 rounded-md ' />
                </div>

                <div className="grid w-full max-w-sm items-center gap-2">
                  <label htmlFor="number" className='font-semibold text-base' >Phone Number</label>
                  <input type="number" id=" phone number" placeholder="phone number" className=' w-[340px] h-[50px]  outline-none bg-[#F6F7F9] font-md text-sm py-3 pl-6 rounded-md ' />
                </div>
              </div>

              <div className="flex">

                <div className="grid w-full max-w-sm items-center gap-2">
                  <label htmlFor="text" className='font-semibold text-base' >Address</label>
                  <input type="text" id="address" placeholder="Address" className='w-[340px] h-[50px]  outline-none bg-[#F6F7F9] font-md text-sm py-3 pl-6 rounded-md ' />

                </div>

                <div className="grid w-full max-w-sm items-center gap-2">
                  <label htmlFor="text" className='font-semibold text-base' >Town/City</label>
                  <input type="text" id="city" placeholder="Town or city" className=' w-[340px] h-[50px]  outline-none bg-[#F6F7F9] font-md text-sm py-3 pl-6 rounded-md ' />
                </div>
              </div>
            </div>

          </div>

          {/* rental info */}

          <div className=" bg-[#FFFFFF] p-7 w-[852px] h-[664px]  rounded-lg  flex flex-col gap-8" >
            <div className="">
              <div className="text-xl font-semibold font-jakarta">Rental Info</div>
              <div className="flex justify-between">
                <p className="text-[#90A3BF] text-sm font-md ">Please enter your rental date</p>
                <p className="text-[#90A3BF] text-sm font-md">Step 2 of 4</p>
              </div>
            </div>

            {/* pick up */}

            <div className="flex flex-col gap-7">
              <div className="flex gap-3">

                <Image
                  src='/mark.svg'
                  alt='mark'
                  width={16}
                  height={16}
                />

                <p className='font-jakarta font-medium'>Pick-up</p>
              </div>

              <div className="flex">

                <div className="grid w-full max-w-sm items-center gap-2">
                  <label htmlFor="location" className='font-semibold text-base' >Locations</label>
                  <select id="options" name="options" className='w-[350px] h-[50px]  outline-none bg-[#F6F7F9] font-md text-sm py-3 pl-6 rounded-md text-[#90A3BF]'>
                    <option value="option1">Select your city</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                  </select>

                </div>

                <div className="grid w-full max-w-sm items-center gap-2">
                  <label htmlFor="date" className='font-semibold text-base' >Date</label>
                  <select id="options" name="options" className='w-[350px] h-[50px]  outline-none bg-[#F6F7F9] font-md text-sm py-3 pl-6 rounded-md text-[#90A3BF]'>
                    <option value="option1">Select your date</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                  </select>

                </div>
              </div>

              <div className="grid w-full max-w-sm items-center gap-2">
                <label htmlFor="number" className='font-semibold text-base' >Time</label>

                <select id="options" name="options" className='w-[350px] h-[50px]  outline-none bg-[#F6F7F9] font-md text-sm py-3 pl-6 rounded-md text-[#90A3BF]'>
                  <option value="option1">Select your time</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </div>

            </div>

            {/* drop off */}

            <div className="flex flex-col gap-7">
              <div className="flex gap-3">

                <Image
                  src='/mark-2.svg'
                  alt='mark'
                  width={16}
                  height={16}
                />

                <p className='font-jakarta font-medium'>Drop-off</p>
              </div>

              <div className="flex">

                <div className="grid w-full max-w-sm items-center gap-2">
                  <label htmlFor="location" className='font-semibold text-base' >Locations</label>
                  <select id="options" name="options" className='w-[350px] h-[50px]  outline-none  bg-[#F6F7F9] font-md text-sm py-3 pl-6 rounded-md text-[#90A3BF]'>
                    <option value="option1">Select your city</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                  </select>

                </div>

                <div className="grid w-full max-w-sm items-center gap-2">
                  <label htmlFor="date" className='font-semibold text-base' >Date</label>
                  <select id="options" name="options" className='w-[350px] h-[50px]  outline-none bg-[#F6F7F9] font-md text-sm py-3 pl-6 rounded-md text-[#90A3BF]'>
                    <option value="option1">Select your date</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                  </select>

                </div>
              </div>

              <div className="grid w-full max-w-sm items-center gap-2">
                <label htmlFor="number" className='font-semibold text-base' >Time</label>

                <select id="options" name="options" className='w-[350px] h-[50px]  outline-none bg-[#F6F7F9] font-md text-sm py-3 pl-6 rounded-md text-[#90A3BF]'>
                  <option value="option1">Select your time</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </div>

            </div>


          </div>


          {/* payment method */}

          <div className="w-[852px] h-[596px] bg-[#ffffff] p-7 flex flex-col gap-5 rounded-lg">

            <div className="">
              <div className="text-xl font-semibold font-jakarta">Payment Method</div>
              <div className="flex justify-between">
                <p className="text-[#90A3BF] text-sm font-md ">Please enter your payment method</p>
                <p className="text-[#90A3BF] text-sm font-md">Step 3 of 4</p>
              </div>
            </div>

            {/* credit div */}
            <div className="w-[804px] h-[304px] bg-[#F6F7F9] rounded-lg p-5 flex flex-col gap-5">

              <div className="flex justify-between">

                <div className="flex gap-3">
                  <Image
                    src='/mark.svg'
                    alt='mark'
                    width={16}
                    height={16}
                  />

                  <p className='font-jakarta font-medium'>Credit Card</p>
                </div>
                <Image
                  src='/Visa.svg'
                  alt='visa'
                  width={92}
                  height={20}
                />

              </div>


              <div className="flex flex-col gap-6">
                <div className="flex">

                  <div className="grid w-full max-w-sm items-center gap-2">
                    <label htmlFor="number" className='font-semibold text-base' >Card Number</label>
                    <input type="number" id="number" placeholder="Card number" className=' w-[340px] h-[50px] outline-none bg-[#ffffff] font-md text-sm py-3 pl-6 rounded-md ' />
                  </div>

                  <div className="grid w-full max-w-sm items-center gap-2">
                    <label htmlFor="date" className='font-semibold text-base' >Expration Date</label>
                    <input type="text" id="text" placeholder="DD/MM/YY" className=' w-[340px] h-[50px]  outline-none bg-[#ffffff] font-md text-sm py-3 pl-6 rounded-md ' />
                  </div>
                </div>

                <div className="flex">

                  <div className="grid w-full max-w-sm items-center gap-2">
                    <label htmlFor="text" className='font-semibold text-base' >Card Holder</label>
                    <input type="text" id="text" placeholder="Card holder" className='w-[340px] h-[50px]  outline-none bg-[#ffffff] font-md text-sm py-3 pl-6 rounded-md ' />

                  </div>

                  <div className="grid w-full max-w-sm items-center gap-2">
                    <label htmlFor="text" className='font-semibold text-base' >CVC</label>
                    <input type="text" id="text" placeholder="CVC" className=' w-[340px] h-[50px]  outline-none bg-[#ffffff] font-md text-sm py-3 pl-6 rounded-md ' />
                  </div>
                </div>
              </div>

            </div>


            {/* radio divs */}

            <div className="w-[804px] h-[56px] bg-[#F6F7F9] flex justify-between px-5 rounded-lg">
              <div className="flex justify-center py-3 ">  <input type="radio" className='mr-3' />Paypal</div>

              <Image
                src='/PayPal.svg'
                alt='paypal'
                width={100}
                height={24}
              />
            </div>

            <div className="w-[804px] h-[56px] bg-[#F6F7F9] flex justify-between px-5 rounded-lg">
              <div className="flex justify-center py-3 ">  <input type="radio" className='mr-3' />Bitcoin</div>

              <Image
                src='/Bitcoin.svg'
                alt='bitcoin'
                width={100}
                height={24}
              />
            </div>


          </div>

          {/* confirmation */}
          <div className="w-[852px] h-[430px] flex flex-col gap-4 bg-white rounded-lg p-7 ">
            <div className="">
              <div className="text-2xl font-semibold font-jakarta">Confirmation</div>
              <div className="flex justify-between">
                <p className="text-[#90A3BF] text-sm font-md ">We are getting to the end. Just few clicks and your rental is ready!</p>
                <p className="text-[#90A3BF] text-sm font-md">Step 4 of 4</p>
              </div>
            </div>

            {/* checkbox */}

            <div className="flex flex-col gap-3">

              <div className="w-[804px] h-[56px] bg-[#F6F7F9] flex justify-between px-5 pt-1 rounded-lg">
                <div className="flex justify-center py-3 font-semibold">  <input type="checkbox" className='mr-3 w-6 h-6 ' />I agree with sending an Marketing and newsletter emails. No spam, promissed!</div>


              </div>

              <div className="w-[804px] h-[56px] bg-[#F6F7F9] flex justify-between px-5 pt-1 rounded-lg">
                <div className="flex justify-center py-3 font-semibold  ">  <input type="checkbox" className='mr-3 w-6 h-6 ' />I agree with our terms and conditions and privacy policy.</div>

              </div>
            </div>

            {/* button */}

            <div className="">
              <button className='bg-[#3563E9] text-[#FFFFFF] px-1 py-3 rounded-[10px] w-[140px] h-[56px]  font-semibold'>Rent Now</button>
            </div>

            {/* safety img */}
            <div className="">
              <Image
                src={'/safety.svg'}
                alt='safety img'
                width={32}
                height={32}

              />
            </div>

            {/* text  */}

            <div className="">
              <p className='font-semibold'>All your data are safe</p>
              <p className='text-[#90A3BF] font-normal text-sm'>We are using the most advanced security to provide you the best experience ever.</p>
            </div>




          </div>



        </div>

        {/* rental summary */}

        <div className="w-[492px] h-[560px] rounded-lg bg-[#FFFFFF] p-5 flex flex-col gap-8 ">
          {/* text */}
          <div className="">
            <p className="font-bold text-lg">Rental Summary</p>
            <p className="font-normal text-sm text-[#90A3BF]">Prices may change depending on the length of the rental and the price of your rental car.</p>
          </div>

          {/* img */}
          <div className="flex border-b-2 h-[150px] ">
            <div className="">

            <Link href='dashboard'>  <Image
                src={'/car-look.svg'}
                alt='car'
                width={132}
                height={108}

              />
              </Link>
            </div>

            <div className="w-[220px] h-[72px] ml-5 ">
              <p className='font-bold text-3xl font-jakarta mb-2'>Nissan GT - R</p>

              <div className="flex ">
                <Image
                  src={'/Review Star.svg'}
                  alt='review'
                  width={108}
                  height={20}

                />
                <p className='text-[#596780] text-sm ml-1'>440+ Reviewer</p>

              </div>


            </div>
          </div>

          <div className="flex flex-col gap-3">

          {/* subtotal */}
          <div className="flex justify-between">
            <p className="text-[#90A3BF] font-medium text-sm">Subtotal</p>
            <p className="font-semibold ">$80.00</p>
          </div>

          {/* tax */}
          <div className="flex justify-between">
          <p className="text-[#90A3BF] font-medium text-sm">Tax</p>
          <p className="font-semibold ">$0</p>
          </div>
          </div>

          {/* apply now */}

          <div className="w-[444px] h-[56px] bg-[#F6F7F9] flex justify-between text-center p-5 rounded-lg">
         
           <input type="text" placeholder='Apply promo code' className='text-[#90A3BF] bg-[#F6F7F9] font-normal text-sm outline-none'/>
           <p className='font-semibold  '>Apply Now</p>
          
          </div>

          {/* rental price */}
               <div className="flex justify-between">
                <div className="">
                <p className="font-bold text-lg">Rental Summary</p>
                <p className="font-normal text-sm text-[#90A3BF]">Overall price and includes rental discount</p>
                </div>
                <div className="">
                  <p className="text-3xl font-bold ">$80.00</p>
                </div>
               </div>


        </div>








      </main>
    </div>
  )
}

export default Payment



