import React from "react";
import LocationIcon from '../svg/LocationIcon'
import PhoneIcon from '../svg/PhoneIcon'
import image from '../../assets/images/breweryImage.png'

export default function BreweryCard(){


    let title = 'Havre 73, Juárez, Cuauhtémoc'

    if(title.length > 28){
       title = `${title.slice(1,28)}...`
    }
    return(
        <div id="breweryCard">
            <div className="breweryCard__container">
                <span className="breweryCard__title">Bar Nim</span>
                <div className="breweryCard__data">
                    <div className="breweryCard__data-img">
                        <img src={image.src} alt="brewery image" />
                    </div>
                    <div className="breweryCard__data-text">
                        <div className="breweryCard__data-text__item">
                            <LocationIcon/>
                            <span>{title}</span>
                        </div>
                        <div className="breweryCard__data-text__item">
                            <PhoneIcon/>
                            <span>4235-8766</span>
                        </div>
                    </div>
                </div>
                <button className="breweryCard__see-more">Ver más</button>
            </div>
        </div>
    )
}