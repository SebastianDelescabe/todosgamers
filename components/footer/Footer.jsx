import React from "react"
import CalendarIcon from '../svg/CalendarIcon'
import ChatIcon from '../svg/ChatIcon'
import HomeIcon from '../svg/HomeIcon'

export default function Footer() {
  return (
    <footer id="footer__mobile">
        <div className="footer__mobile-container">
          <div className="footer__mobile-item">
            <CalendarIcon/>
            <span>Calendario</span>
          </div>
          <div className="footer__mobile-item">
            <HomeIcon/>
            <span>Inicio</span>
          </div>
          <div className="footer__mobile-item">
            <ChatIcon/>
            <span>Chat</span>
          </div>
        </div>
    </footer>
  )
}