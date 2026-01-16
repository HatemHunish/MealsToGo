import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest=(searchTerm)=>{
    return new Promise((resolve,reject)=>{
        const location = locations[searchTerm.toLowerCase()];
        if(!location){
            reject('Location not found');
        }
        resolve(location);
    })
}

export const locationTransform = (result)=>{
    const {geometry={}} =  camelize(result.results)[0];
    const {lat,lng} = geometry.location;
    return {lat,lng};
}