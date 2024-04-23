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
                    {
                        breweryAdress ?
                        <span>{maxCaracter(breweryAdress,28)}</span>
                        : 
                        <span>No se encontró ubicación</span>
                    }
                </div>
                <div className="locationandphone-text__item">
                    <PhoneIcon/>
                    {
                        breweryPhone ?
                        <span>{breweryPhone}</span>
                        : 
                        <span>No se encontró teléfono</span>
                    }
                </div>
            </div>
        </div>
    )
}