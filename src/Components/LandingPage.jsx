import React, { useState } from 'react'
import Image from './Image'
import Notification from './Notifier/Notification';
import Button from './Button';
import ValueProposition from './ValueProposition';



export default function LandingPage() {
    const [ open , setOpen] =useState(false);
    const handleOpen = ()=>{
        setOpen(!open);    
    }
  return (
    <>
    <div className='landingPageDiv'>
        <Image src='./a.avif' alt=""  className='getReady'/>
        {/* <Button onClick={handleOpen}>Open</Button> */}
        {/* {open && <Notification setOpen={setOpen} open={open}/> } */}
        <ValueProposition/>
        <Image src="./75off.avif" alt="" className='off75'/>
    </div>
    </>
  )
}
