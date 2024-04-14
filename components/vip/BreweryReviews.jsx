import React from "react";
import userImage from '../../assets/images/userImage.png'

let review = 'Me encantan este tipo de cafés! La velocidad de wifi es muy bueno'

if(review.length > 63){
   review = `${review.slice(0,63)}...`
}

export default function BreweryReviews(){
    return(
        <div id="breweryreviews">
            <div className="breweryreviews__container">
                <div className="breweryreviews__user">
                    <div className="breweryreviews__user-info">
                        <img src={userImage.src} alt="user image" />
                        <span>Cris</span>
                    </div>
                    <span className="breweryreviews__user-answer">Responder</span>
                </div>
                <div className="breweryreviews__comment">
                    <span>{review}</span>
                </div>
            </div>
        </div>
    )
}