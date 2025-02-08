// import { sanityFetch } from "@/sanity/lib/live";
// import { allCars } from "@/sanity/lib/queries";
// import Image from "next/image";

// type Cars = {
//    _type : string;
//    transmission:string;
//    seatingcapacity:number;
//    fuelcapacity:number;
//    name: string;
//    brand : string
//    description : string;
//    priceperday: number;
//    imageURL: string;

// }

// export default async function Home (){
//   const response = await sanityFetch({ query: allCars });
// console.log(response); // Debug the actual response structure
// const car: Cars[] = response.data; // Ensure `data` is actually an array

//   return(
//     <div>
//       <h1>
//         Cars
//       </h1>
//       <div className="grid grid-cols-4 gap-4">
//         {
//           car.map((car) => (
//             <div className="border p-4  rounded-lg shadow-sm flex flex-col items-center" key={car._type}>
//               <Image src={car.imageURL} alt={car.name} className="w-60" height={400} width={400} />
//               <h2 className="text-xl font-bold text-center">
//                 {car.name}
//               </h2>
//               <p className="text-center">
//                 {car.brand}
//               </p>
//               <p className="text-center text-blue-200">
//                 {car.description}
//               </p>
//               <p className="text-center text-blue-400">
//                 {car.priceperday}
//               </p>

//             </div>
//           ))
//         }
//       </div>
//     </div>

//   )
// }


import React from 'react'
import HeroSection from "@/app/component/HeroSection"


const page = () => {
  return (
    <div>
     <HeroSection/>
    
    </div>
  )
}

export default page
