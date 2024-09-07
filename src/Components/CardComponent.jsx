import React, { useEffect, useState } from 'react'
import { dataObject } from './Data'
import Image from './Image'
import './CardComponent.css'
export default function CardComponent() {
    const [imageIndex , setImageIndex] = useState(0);
    useEffect(()=>{
      const interval =  setInterval(()=>{
            setImageIndex(prevIndex=>{
                const totalImages = dataObject[0]?.images.length || 1; 
                return (prevIndex + 1) % totalImages;
      })
        },10000);
        return () => clearInterval(interval);
    },[])
  return (
    <div className='ContainerDiv'>
        {
            dataObject.map(item =>{
                return(
                    <div className='cardComponentMainDIv' key={item.id}>
                        <div className='DestinationItem'>
                            <Image src={item.images[imageIndex]} alt="" className='imageOfCard'/>
                            <h2 className='placeName'>
                                {item.listingName}
                            </h2>
                            <p className='rating'>
                                <span>{item.avgRating} / 5</span>
                                <span>({item.reviewsCount})</span>
                            </p>
                            <p className='cityDetails'>
                                <span className='locationSvg'><svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="20px" fill="#5f6368"><path d="M480.21-466Q516-466 541-491.21t25-61Q566-588 540.79-613t-61-25Q444-638 419-612.79t-25 61Q394-516 419.21-491t61 25ZM480-219q112-97 171-175t59-160q0-95.97-66.04-162.48-66.03-66.52-164-66.52Q382-783 316-716.48 250-649.97 250-554q0 82 59 159.5T480-219Zm0 170Q299.03-195.11 210.51-312.55 122-430 122-554q0-147.72 101.75-252.36Q325.51-911 479.5-911t256.25 104.64Q838-701.72 838-554q0 124-88 241T480-49Zm0-503Z"/></svg></span>
                                <span>{item.city}</span>
                            </p>
                            <p>
                                <span>{item.accessibilityLabel}</span>
                            </p>
                        </div>
                    </div> 
                )
            })
        }
    </div>
  )
}