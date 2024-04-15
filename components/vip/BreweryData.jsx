import React from "react";
import LocationAndPhone from '../locationAndPhone/LocationAndPhone'
import BreweryImages from './BreweryImages'


export default function BreweryData({breweryAdress,breweryPhone}){

    return(
        <div id="brewerydata">
            <div className="brewerydata__container">
                <LocationAndPhone data={{breweryAdress,breweryPhone}}/>
                <BreweryImages/>
            </div>
        </div>
    )
}