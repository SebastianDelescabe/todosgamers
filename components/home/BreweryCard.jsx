import React from "react";
import image from '../../assets/images/breweryImage.png'
import LocationAndPhone from '../locationAndPhone/LocationAndPhone'
import Link from 'next/link';

export default function BreweryCard(){
    
    let title = 'Havre 73, Juárez, Cuauhtémoc'

    if(title.length > 28){
       title = `${title.slice(0,28)}...`
    }

    return(
        <div id="breweryCard">
            <div className="breweryCard__container">
                <span className="breweryCard__title">Bar Nim</span>
                <div className="breweryCard__data">
                    <div className="breweryCard__data-img">
                        <img src={image.src} alt="brewery image" />
                    </div>
                    <LocationAndPhone/>
                </div>
                <Link href='/vip' className="breweryCard__see-more" >Ver más </Link>
            </div>
        </div>
    )
}