import React, { useEffect, useState } from "react"
import Bell from "../svg/Bell.jsx"
import LoginIcon from "../svg/LoginIcon.jsx"
import MenuIcon from "../svg/MenuIcon.jsx"
import ArrowLeft from "../svg/ArrowLeft.jsx"
import Link from 'next/link';

export default function Header() {

  const [windoPath, setwindoPath] = useState('/')

  useEffect(() => {
    setwindoPath(window.location.pathname);
  })

  console.log(windoPath);
  
  return (
    <header id="header__mobile">
        <div className="header__mobile-container">
            <div className="header__mobile-menu">
              {
                windoPath === '/' ?  <MenuIcon/> : 
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