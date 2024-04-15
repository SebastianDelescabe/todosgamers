import React from "react";
import image from '../../assets/images/breweryImage.png'
import LocationAndPhone from '../locationAndPhone/LocationAndPhone'
import Link from 'next/link';
import { maxCaracter } from "../../helpers/maxCaracter";


export default function BreweryCard({data}){


    let {breweryAdress,breweryID,breweryPhone,breweryName} = data

    return(
        <div id="breweryCard">
            <div className="breweryCard__container">
                <span className="breweryCard__title">{maxCaracter(breweryName,28)}</span>
                <div className="breweryCard__data">
                    <div className="breweryCard__data-img">
                        <img src={image.src} alt="brewery image" />
                    </div>
                    <LocationAndPhone data={{breweryAdress,breweryPhone}}/>
                </div>
                <Link href='/vip' className="breweryCard__see-more" >Ver más </Link>
            </div>
        </div>
    )
}