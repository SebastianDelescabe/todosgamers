import React from "react"
import AlertIcon from "../svg/AlertIcon"

export default function HappyAlert() {
  return (
    <div id="happyalert">
        <div className="happyalert__container">
            <AlertIcon/>
            <div className="happyalert__text-content">
                <span>Happy Hour</span>
                <p>16:00 - 17:00 hs MEX</p>
            </div>
        </div>
    </div>
  )
}
