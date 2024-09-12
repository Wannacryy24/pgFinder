import React, { useContext, useEffect, useState } from 'react';
import './Footer.css';
import DownArrow from '../AmenitiesComponents/DownArrow';
import UpArrow from '../AmenitiesComponents/UpArrow';
import FooterMoreDetails from './FooterMoreDetails';
import { SearchContext } from '../Context/searchContext';

export default function Footer() {
  const {upArrow, setUpArrow} =useContext(SearchContext);
  // const [upArrow, setUpArrow] = useState(false);
  const [isnewFooter , setIsNewFooter] = useState(window.innerWidth < 600); 

  const handleResize = () => {
    setIsNewFooter(window.innerHeight<600);
  }

  useEffect(()=>{
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  },[]);


  return (
    <>
      {
        isnewFooter ?(<FooterMoreDetails newWidth={isnewFooter}/>) :(
          <>
          <hr />
          {upArrow ? (
              <>
                <FooterMoreDetails />
              </>
            ) : (
              <footer>
              <div className='footerLeftDiv'>
                <p>© 2024 Airbnb, Inc.</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>SiteMap</p>
                <p>Company Details</p>
              </div>
              <div className='footerRightDiv'>
                <p>{`English (IN)`}</p>
                <p>₹ INR</p>
                <div onClick={() => setUpArrow(!upArrow)} className='support-resources'>          
                  Support & resources 
                  <DownArrow />
                </div>
              </div>
            </footer>
            )}
          </>
        )
      }
    </>
  );
}
