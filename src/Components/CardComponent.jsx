import React, { useContext, useEffect, useState } from 'react'
import { dataObject } from './Data'
import Image from './Image'
import './CardComponent.css'
import { SearchContext } from './Context/searchContext';
export default function CardComponent() {
    const [imageIndex , setImageIndex] = useState(0);
    const {value} = useContext(SearchContext)
    console.log(value);
    useEffect(()=>{
      const interval =  setInterval(()=>{
            setImageIndex(prevIndex=>{
                const totalImages = dataObject[0]?.images.length || 1; 
                return (prevIndex + 1) % totalImages;
      })
        },10000);
        return () => clearInterval(interval);
    },[]);
    
    const filteredData = dataObject.filter(item => item.city.toLowerCase().includes(value.toLowerCase()));
    // console.log(filteredData);
    // console.log(dataObject);
  return (
    <div className='ContainerDiv'>
        {
            filteredData
            .map(item =>{
                return(
                    <div className='cardComponentMainDIv' key={item.id}>
                        <div className='DestinationItem'>
                            <Image src={item.images[imageIndex]} alt="" className='imageOfCard'/>
                            <div className='placeName'>
                                <p className='p-universal-css'>
                                    {item.listingName}
                                </p>
                            </div>
                            <div className='rating'>
                                <p className='p-universal-css'>{item.avgRating} / 5</p>
                                <p className='p-universal-css'>({item.reviewsCount})</p>
                            </div>
                            <div className='cityDetails'>
                                <p className='p-universal-css'>{item.city}</p>
                            </div>
                            <div className='priceDiv'>
                                <p className='p-universal-css'>{item.accessibilityLabel}</p>
                            </div>
                            <div className='bedDiv'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="24px" fill="#0079c2"><path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z"/></svg>
                                <p className='p-universal-css'>Beds {item.beds}</p>
                            </div>
                            <div className='petDiv'>
                                {
                                    item.pets>0 && 
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="24px" fill="#0079c2"><path d="M180-475q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180-160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm240 0q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180 160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM266-75q-45 0-75.5-34.5T160-191q0-52 35.5-91t70.5-77q29-31 50-67.5t50-68.5q22-26 51-43t63-17q34 0 63 16t51 42q28 32 49.5 69t50.5 69q35 38 70.5 77t35.5 91q0 47-30.5 81.5T694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z"/></svg>
                                        <p className='p-universal-css'>Pet Friendly</p>
                                    </>
                                }
                                {
                                    item.pool && 
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0079c2"><path d="M80-120v-80q38 0 57-20t75-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 75 20t57 20v80q-59 0-77.5-20T748-160q-36 0-57 20t-77 20q-56 0-77-20t-57-20q-36 0-57 20t-77 20q-56 0-77-20t-57-20q-36 0-54.5 20T80-120Zm0-180v-80q38 0 57-20t75-20q56 0 77.5 20t56.5 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 75 20t57 20v80q-59 0-77.5-20T748-340q-36 0-55.5 20T614-300q-57 0-77.5-20T480-340q-38 0-56.5 20T346-300q-59 0-78.5-20T212-340q-36 0-54.5 20T80-300Zm196-204 133-133-40-40q-33-33-70-48t-91-15v-100q75 0 124 16.5t96 63.5l256 256q-17 11-33 17.5t-37 6.5q-36 0-57-20t-77-20q-56 0-77 20t-57 20q-21 0-37-6.5T276-504Zm392-336q42 0 71 29.5t29 70.5q0 42-29 71t-71 29q-42 0-71-29t-29-71q0-41 29-70.5t71-29.5Z"/></svg>
                                        <p className='p-universal-css'>Pool</p>
                                    </>
                                }
                            </div>
                        </div>
                    </div> 
                )
            })
        }
    </div>
  )
}