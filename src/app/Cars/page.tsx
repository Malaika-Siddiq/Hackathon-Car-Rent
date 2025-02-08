'use client'
import React ,{useEffect, useState}from 'react'
import { car } from '../../../types/cartype'
import { client } from '@/sanity/lib/client'
import { allCars } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

const Cardapi = () => {

  const [car , setCar] = useState<car[]>([])

  useEffect(()=>{
    async function fetchcar(){
        const fetchedcar : car[] =await client.fetch(allCars)
        setCar(fetchedcar)
    }
    fetchcar()
  },[] )
  return (
    <div className='max-w-6xl mx-auto px-4 py-8 '>
    
      <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-col-4 gap-6  bg-white'>
      {car.map((car) => (

        <div
        className=' border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'
        key={car._id}>
                  <h2 className='text-lg font-semibold mt-4'>{car.name}</h2>
                  <p className='text-gray-500'>{car.brand}</p>
                  <Link href={`/Carlink/${car.slug?.current}`}>
          {car.image && (
            <Image
            src={urlFor(car.image).url()}
            alt="images"
            height={200}
            width={200}
            className='w-full h-48  rounded-md'
            />
          )}

          <div className='flex justify-between text-gray-500'>
          <p>{car.fuelCapacity}</p>
            <p>  {car.seatingCapacity}</p>
         <p> {car.transmission}</p>
          </div>
          {car.tags}


        <div className="flex justify-between">
            
        <p>  {car.pricePerDay}</p>
       

        <button className="bg-[#3563E9] text-[#FFFFFF] px-4 py-2 rounded-[4px] w-[116px] h-[44px] text-center ">
          Rent Now
        </button>
        </div>
        <p className='line-through'>  {car.originalPrice}</p>
        
        </Link>

        </div>
      ))}
    </div>
    </div>
  )
}

export default Cardapi

