import React from "react"
import Bell from "../svg/Bell.jsx"
import LoginIcon from "../svg/LoginIcon.jsx"
import MenuIcon from "../svg/MenuIcon.jsx"

export default function Header() {
  return (
    <header id="header__mobile">
        <div className="header__mobile-container">
            <div className="header__mobile-menu">
              <MenuIcon/>
            </div>
            <div className="header__mobile-options">
                <Bell/>
                <LoginIcon/>
            </div>
        </div>
    </header>
  )
}