
export interface car{
    _id:string;
    name:string;
    _type:car
    image?:{
        asset : {
            _ref : string;
            _type : "image"
        }
    }
    brand:string;
    pricePerDay:number;
    transmission:string;
    seatingCapacity:string;
    fuelCapacity: string;
    originalPrice:number;
    tags:string;
    slug:{
        _type : "slug"
        current: string;
    };


}