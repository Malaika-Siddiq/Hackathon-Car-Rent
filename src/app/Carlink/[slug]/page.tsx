import { client } from "@/sanity/lib/client";
import { car } from "../../../../types/cartype";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";



interface CarPageProps {
    params : Promise <{slug:string}> 
}

async function getcar(slug : string) : Promise<car|null>{
    return client.fetch(
        groq`*[_type == "car" && slug.current == $slug][0]{
        _id,
        name,
        _type,
        image,
        priceperday,
        }`,{slug}
    )
}

export default async function CarPage({params} : CarPageProps){
    const {slug} =  await params;
    const Car = await getcar(slug)

    return(
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square">
                    {Car?.image &&(
                    <Image
                    src={urlFor(Car.image).url()}
                    alt={Car.name}
                    width={500}
                    height={500}
                    className="rounded-lg shadow-md"
                    />
                    )}
                </div>

                <div className="flex flex-col gap-8">
                    <h1 className="font-bold text-2xl">
                        {Car?.name}
                    </h1>
                    <p className="">{Car?.pricePerDay}</p>
                </div>
            </div>
        </div>
    )
}