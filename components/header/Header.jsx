import React, { useEffect, useState } from "react"
import Bell from "../svg/Bell.jsx"
import LoginIcon from "../svg/LoginIcon.jsx"
import MenuIcon from "../svg/MenuIcon.jsx"
import ArrowLeft from "../svg/ArrowLeft.jsx"
import Link from 'next/link';

export default function Header() {

  const [home, setHome] = useState(true)

  useEffect(() => {
    if(window.location.pathname === '/'){
      setHome(true)
    }else{
      setHome(false)
    }
  })

  return (
    <header id="header__mobile">
        <div className="header__mobile-container">
            <div className="header__mobile-menu">
              {
                home ? <MenuIcon/> : 
                <Link href='/'>
                  <ArrowLeft/>
                </Link>
              }
            </div>
          <div className="header__mobile-options">
              <Bell/>
              <LoginIcon/>
          </div>
        </div>
    </header>
  )
}