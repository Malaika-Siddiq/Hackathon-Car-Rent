import { createClient } from "next-sanity";
import { apiVersion, dataset } from "../env";

const client = createClient ({
    projectId:"w52hm41j",
    dataset: "production",
    useCdn : true,
    apiVersion :"2023-10-10"
})

export async function Sanityfetch({query , params ={}}:{query:string , params?:any}) {
    return await client.fetch(query,params)
    
}