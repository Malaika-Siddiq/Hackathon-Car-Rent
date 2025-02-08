
import { groq } from 'next-sanity';
// import { defineQuery } from "next-sanity";


// export const allCars = defineQuery(`
//     *[ _type == "car" ]{

//     _type,
//     name,
//     brand,
//     type,
//     fuelCapacity,
//     transmission,
//     seatingCapacity,
//     pricePerDay,
//     originalPrice,
//     tags,
//     "imageUrl": image.asset->url,

// }`)


// export const fourCars = defineQuery(`
//     *[ _type == "car" ][0..3]{

//     _type,
//     name,
//     brand,
//     type,
//     fuelCapacity,
//     transmission,
//     seatingCapacity,
//     pricePerDay,
//     originalPrice,
//     tags,
//     "imageUrl": image.asset->url,
    
// }`)



export const allCars = groq`*[_type == "car"]{title,slug}`;
export const fourCars = groq`*[_type == "car"] [0..3]`;