import React, { useEffect, useState } from "react"
import CalendarIcon from '../svg/CalendarIcon'
import ChatIcon from '../svg/ChatIcon'
import HomeIcon from '../svg/HomeIcon'
import Link from 'next/link';

export default function Footer() {

  const [home, setHome] = useState(true)

  useEffect(() => {
    if(window.location.pathname === '/'){
      setHome(true)
    }else{
      setHome(false)
    }
  })

  return (
    <footer id="footer__mobile">
        <div className="footer__mobile-container">
          <div className="footer__mobile-item">
            <CalendarIcon/>
            <span>Calendario</span>
          </div>
          <Link href='/'>
            <div className={home ? "footer__mobile-item home__active" : "footer__mobile-item"}>
              <HomeIcon className=''/>
                <span>Inicio</span>
            </div>
          </Link>
          <div className="footer__mobile-item">
            <ChatIcon/>
            <span>Chat</span>
          </div>
        </div>
    </footer>
  )
}