import React from 'react'
import Wifi from './AmenitiesComponents/Wifi';
import WorkSpace from './AmenitiesComponents/WorkSpace';
import Tv from './AmenitiesComponents/Tv';
import Ac from './AmenitiesComponents/Ac';
import CoDetector from './AmenitiesComponents/CoDetector';
import Fridge from './AmenitiesComponents/Fridge';
import Smoke from './AmenitiesComponents/Smoke';

export default function OffersComponent({activeItem}) {
    // console.log('activeItem' , activeItem);
  return (
    <>
            <div className='one-Div'>
                <div>
                    <Wifi/>
                    <p>{activeItem.offers.wifi?'Wifi':(<s>Wifi</s>)}</p>
                </div>
                <div>
                    <WorkSpace/>
                    <p>{activeItem.offers.dedicatedWorkSpace?'Dedicated workspave':(<s>Dedicated workspave</s>)}</p>
                </div>
                <div>
                    <Tv/>
                    <p>{activeItem.offers.led?'TV':(<s>TV</s>)}</p>
                </div>
                <div>
                    <Fridge/>
                    <p>{activeItem.offers?'Fridge':(<s>Fridge</s>)}</p>
                </div>        
            </div>
            <div className='second-div'> 
                <div>
                    <Ac/>
                    <p>{activeItem.offers.ac ?'Air Conditioning':(<s>Air Conditioning</s>)}</p>
                </div>
                <div>
                    <CoDetector/>
                    <p>{activeItem.offers.co2?'Carbon monoxide alarm':(<s>Carbon monoxide alarm</s>)}</p>
                </div>
                <div>
                    <Smoke/>
                    <p>{activeItem.offers.smokeAlarm?'Smoke alarm':(<s>Smoke alarm</s>)}</p>
                </div>
            </div>
        
    </>
  )
}
