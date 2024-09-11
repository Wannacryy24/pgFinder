import React from "react";
import "./ActiveComponent.css";
import MyMap from "./Header/MyMap";
import OffersComponent from "./OffersComponent";
export default function ActiveComponent({ activeItem, onBackClick }) {
  
  return (
    <div className="Container-Detail-Div">

        <div className="backDiv">
            <button className="button"
                onClick={onBackClick}>
                <div className="button-box">
                    <span className="button-elem">
                    <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                        ></path>
                    </svg>
                    </span>
                    <span className="button-elem">
                    <svg viewBox="0 0 46 40">
                        <path
                        d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                        ></path>
                    </svg>
                    </span>
                </div>
            </button>
        </div>

        <div className="active-item-listingName">
            {activeItem.listingName} {`(${activeItem.city})`}
        </div>

        <div className="Container-Detail-Images">
            <div className="left-detail-Image-Div">
                <img src={activeItem.images[0]} alt="" />
            </div>

            <div className="centre-detail-Image-Div">
                <img src={activeItem.images[1]} alt="" />
                <img src={activeItem.images[2]} alt="" />
            </div>

            <div className="right-detail-Image-Div">
                <img src={activeItem.images[3]} alt="" />
                <img  src={activeItem.images[4]} alt="" />
            </div>
        </div>

        <div>
            <p className="active-item-listingName">{activeItem.publicAddress}</p>
            <div className="active-item-more-details">
                <p>{activeItem.listingGuestLabel}</p>|
                <p>{activeItem.listingBedLabel}</p>|
                <p>{activeItem.bathrooms} bathroom</p>
            </div>
            <div className="host-div">
                <hr/>
                    <img src="" alt="" />
                    <p className="hosted-By">Hosted By  {activeItem.host}</p>
                    <p>{activeItem.yearHosting} years Hosting</p>
                <hr/>
            </div>
                <h2 className="offer-h2">What this Place Offers</h2>
            <div className="offers-div">
                <OffersComponent activeItem={activeItem}/>
            </div>
            {/* <MyMap latitude={activeItem.latitude} longitude={activeItem.longitude}/> */}
        </div>
    </div>
  );
}
