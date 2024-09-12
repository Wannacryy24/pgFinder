import React, { useContext } from 'react';
import { SearchContext } from '../Context/searchContext';
export default function FooterMoreDetails({newWidth}) {
    const {setUpArrow} = useContext(SearchContext);
  return (
    <div className={newWidth?'Footer-More-details-Main-Div-mobile':'Footer-More-details-Main-Div'}>
        <div className={newWidth?'FooterMoreDetails-mobile':'FooterMoreDetails'}>
            <button className={newWidth?'footer-close-btn-mobile':'footer-close-btn'} onClick={()=>setUpArrow(false)}>x</button>
            <div className={newWidth?'supportSection-mobile':'supportSection'}>
                <h3 className={newWidth?'h3Footer-mobile':'h3Footer'}>Support</h3>
                <p>Help Centre</p>
                <p>Get help with a safety issue</p>
                <p>AirCover</p>
                <p>Anti-discrimination</p>
                <p>Disability support</p>
                <p>Cancellation options</p>
            </div>
            <div className={newWidth?'hostingSection-mobile':'hostingSection'}>
                <h3  className={newWidth?'h3Footer-mobile':'h3Footer'}>Hosting</h3>
                <p>Airbnb your home</p>
                <p>AirCover for Hosts</p>
                <p>Hosting resources</p>
                <p>Community forum</p>
                <p>Hosting responsibly</p>
                <p>Join a free Hosting class</p>
            </div>
            <div className={newWidth?'airbnbSection-mobile':'airbnbSection'}>
                <h3 className={newWidth?'h3Footer-mobile':'h3Footer'}>Airbnb</h3>
                <p>Newsroom</p>
                <p>New features</p>
                <p>Careers</p>
                <p>Investors</p>
                <p>Airbnb.org emergency stays</p>
        </div>
            </div>
    </div>
  );
}
