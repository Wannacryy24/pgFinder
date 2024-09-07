import React, { useEffect, useRef, useState } from 'react'

export default function LoginDiv({setShowLoginDiv , ref2}) {    
   const ref = useRef(null);

   useEffect(() =>{
    const handleClickOutside= (e) => {
        
        if(ref2.current && ref.current && !ref.current.contains(e.target)){
            setShowLoginDiv(false);
        }
    }

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
   },[setShowLoginDiv]);

  return (
    <div className='loginDivDetails' ref={ref}>
        <div>
            <p>Sign Up</p>
            <p>Log in</p>
        </div>
        <hr/>
        <div>
            <p>Abode your home</p>
            <p>Help Centre</p>
        </div>
    </div>
  )
}
