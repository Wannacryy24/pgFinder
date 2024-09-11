import React, { useEffect, useState } from 'react'
import Image from '../Image'
import './idleComponent.css'
export default function IdleComponent() {
    const [isVisible , setIsVisible] = useState(false);
    useEffect(()=>{
        let timeoutId;
        const handleIdleNotificationToShow = ()=>{
            clearTimeout(timeoutId);
            timeoutId = setTimeout(()=>{
                setIsVisible(true);
            },150000)
        }
        window.addEventListener('mousemove' , handleIdleNotificationToShow);
        window.addEventListener('keydown' , handleIdleNotificationToShow);
        window.addEventListener('scroll' , handleIdleNotificationToShow);
        return () => {
            window.removeEventListener('mousemove' , handleIdleNotificationToShow);
            window.removeEventListener('keydown' , handleIdleNotificationToShow); 
            window.removeEventListener('scroll' , handleIdleNotificationToShow); 
            clearTimeout(timeoutId);   
        }
    },[]);
  return (
        isVisible && (
            <div className='blurDiv'>
                <div className='idleComponentDiv'>
                    <div className='imageContainer'>
                        <Image src='./idle.png' className='idleImage'/>
                    </div>
                    <div className='detailsContainer'>
                        <p className="abodeName abodeIdle">Airbnb</p>
                        <p className='stillSearching'>Still searching for a great deal?</p>
                        <p className='createP'>Create an account to unlock more savings or refresh to see the latest hotel prices.</p>
                        <button className='createAccountBtn'>Create an account</button>
                        <div className='hrDiv'>
                            <hr/>
                            <p> or </p>
                            <hr/>
                        </div>
                        <button className='refreshBtn'>Refresh Result</button>
                        <button onClick={()=>setIsVisible(false)} className='closeIdleDiv'>
                            <h3>X</h3>
                        </button>
                    </div>
                </div>
            </div>
        )
    )
}
