import React from 'react'
import './Notification.css'
export default function Notification({setOpen,open}) {
    const handleClick = ()=> {
        setOpen(!open);
    }
  return (
    <div className='notificationDiv'>
        <div>
            <button onClick={handleClick}>close</button>
        </div>
    </div>
  )
}
