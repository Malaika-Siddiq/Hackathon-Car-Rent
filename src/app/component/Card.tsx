import React from 'react'
import Image from 'next/image'

const Card = (props: any) => {
    return (
        <div>


            <div className="w-[300px] h-[380px] boarder rounded-lg bg-[#FFFFFF] px-6 py-6 flex-col justify">



                {/* top icon and hd */}

                <div className="flex justify-between ">
                    <p className='font-semibold font-jakarta'>{props.name}</p>
                    <Image
                        src={props.heart}
                        alt='heart'
                        width={24}
                        height={24}
                         />


                </div>
                <div className=""><p className='text-[#90A3BF] font-jakarta text-sm'>{props.type}</p></div>

                {/* image  */}

                <div className="ml-5 mt-20  ">


                    <Image
                        src={props.car}
                        alt='car'
                        width={232}
                        height={72}
                        className='' />

                    <Image
                        src='/shadow.svg'
                        alt='shadow'
                        width={304}
                        height={80}
                        className='relative bottom-9'

                    />



                </div>

                {/* icons */}

                <div className="flex-col justify-between ">

                    <div className="flex justify-between">

                        {/* gas */}

                        <div className="text-[#90A3BF] flex justify-center items-center">
                            <Image
                                src='/gas-station.svg'
                                alt='gas staion'
                                width={24}
                                height={24} />
                            <p className='text-[#90A3BF] text-sm ml-1'>{props.liter}</p>
                        </div>

                        {/* mannual */}

                        <div className="text-[#90A3BF] flex justify-center items-center ">
                            <Image
                                src='/mannual.svg'
                                alt='gas staion'
                                width={24}
                                height={24} />
                            <p className='text-[#90A3BF] text-sm  ml-1'>Manual</p>
                        </div>

                        {/* people */}

                        <div className="text-[#90A3BF] flex justify-center items-center">
                            <Image
                                src='/people.svg'
                                alt='gas staion'
                                width={24}
                                height={24} />
                            <p className='text-[#90A3BF] text-sm  ml-1'>{props.people} People</p>
                        </div>

                    </div>

                    {/* button and price */}

                    <div className="flex justify-between items-center mt-4">
                        {/* price */}
                        <div className="flex-col  ">
                            <p className="text-[#1A202C] font-jakarta font-bold text-xl ">${props.price} <span className='text-xs text-[#90A3BF]'>day</span></p>  
                            <p className="text-[#90A3BF] text-sm line-through">{props.discount}</p>
                            </div>
                        {/* button */}

                        <button className='bg-[#3563E9] text-[#FFFFFF] px-1 py-3 rounded-[4px] w-[116px] h-[44px] text-center'>Rent Now</button>

                    </div>

                   

                </div>

            </div>



        </div>
    )
}

export default Card
