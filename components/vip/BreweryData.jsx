import React from "react";
import LocationAndPhone from '../locationAndPhone/LocationAndPhone'
import BreweryImages from './BreweryImages'


export default function BreweryData(){
    return(
        <div id="brewerydata">
            <div className="brewerydata__container">
                <LocationAndPhone/>
                <BreweryImages/>
            </div>
        </div>
    )
}