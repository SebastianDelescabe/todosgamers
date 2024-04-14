import React from "react";
import LocationIcon from '../svg/LocationIcon'
import PhoneIcon from '../svg/PhoneIcon'

export default function LocationAndPhone(){

    let location = 'Havre 73, Juárez, Cuauhtémoc'

    if(location.length > 28){
       location = `${location.slice(0,28)}...`
    }
    return(
        <div id="locationandphone">
            <div className="locationandphone-text">
                <div className="locationandphone-text__item">
                    <LocationIcon/>
                    <span>{location}</span>
                </div>
                <div className="locationandphone-text__item">
                    <PhoneIcon/>
                    <span>4235-8766</span>
                </div>
            </div>
        </div>
    )
}