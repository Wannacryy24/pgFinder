import React from 'react'
import Image from './Image'

export default function ValueProposition() {
  return (
    <div className='simpleBig'>
            <div className='searchSimplyDIv'>
                <Image src="./Search.svg" alt="" />
                <h3>Search simply</h3>
                <p>Search through 5 million hotels in just a few seconds.</p>
            </div>
            <div className='compareDiv'>
            <Image src="./Compare.svg" alt="" />
                <h3>Compare confidently</h3>
                <p>Compare hotel prices from 100s of sites at once.</p>
            </div>
            <div className='saveBigDiv'>
                <Image src="./Save.svg" alt="" />
                <h3>Save big</h3>
                <p>Discover a great deal to book on our partner sites.</p>
            </div>
        </div>
  )
}
