import React from "react";
import { maxCaracter } from "../../helpers/maxCaracter";

export default function BreweryReviews({data}){

    const {name, photo, review } = data
    return(
        <div id="breweryreviews">
            <div className="breweryreviews__container">
                <div className="breweryreviews__user">
                    <div className="breweryreviews__user-info">
                        <img src={photo.src} alt="user image" />
                        <span>{name}</span>
                    </div>
                    <span className="breweryreviews__user-answer">Responder</span>
                </div>
                <div className="breweryreviews__comment">
                    <span>{maxCaracter(review,63)}</span>
                </div>
            </div>
        </div>
    )
}