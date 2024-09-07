import React from 'react'

export default function LandingPage() {
    
  return (
    <>
    <div className='landingPageDiv'>
        <img src='./a.avif' alt=""  className='getReady'/>
        <div className='simpleBig'>
            <div className='searchSimplyDIv'>
                <img src="./Search.svg" alt="" />
                <h3>Search simply</h3>
                <p>Search through 5 million hotels in just a few seconds.
                </p>
            </div>
            <div className='compareDiv'>
            <img src="./Compare.svg" alt="" />
                <h3>Compare confidently</h3>
                <p>Compare hotel prices from 100s of sites at once.
                </p>
            </div>
            <div className='saveBigDiv'>
                <img src="./Save.svg" alt="" />
                <h3>Save big</h3>
                <p>Discover a great deal to book on our partner sites.</p>
            </div>
        </div>
        <img src="./75off.avif" alt="" className='off75'/>
    </div>
    </>
  )
}
