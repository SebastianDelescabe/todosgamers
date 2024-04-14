import React from "react";
import { breweryImages } from '../../assets/images/breweryImages/index'

export default function BreweryImages(){
    return(
        <div id="breweryimages">
            <div className="breweryimages__container">
                {
                    breweryImages && breweryImages.map((image,i) => (
                        <img key={i + image.src} src={image.src} alt='brewery images'></img>
                    ))
                }
            </div>
        </div>
    )
}