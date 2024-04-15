import React from "react";
import LocationIcon from '../svg/LocationIcon'
import PhoneIcon from '../svg/PhoneIcon'
import { maxCaracter } from "../../helpers/maxCaracter";

export default function LocationAndPhone({data}){

    const { breweryAdress , breweryPhone } = data

    return(
        <div id="locationandphone">
            <div className="locationandphone-text">
                <div className="locationandphone-text__item">
                    <LocationIcon/>
                    <span>{maxCaracter(breweryAdress,28)}</span>
                </div>
                <div className="locationandphone-text__item">
                    <PhoneIcon/>
                    <span>{breweryPhone}</span>
                </div>
            </div>
        </div>
    )
}