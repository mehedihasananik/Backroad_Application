import React from 'react'
import logo from "../images/logo.svg"
import { links, sociaLinks } from '../data'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {
            links.map(link => {
              return (
                <li key={link.id}>
                  <a href={link.href} className="nav-link">{link.title} </a>
                </li>)
            })
          }
        </ul>

        <ul className="nav-icons">
          {
            sociaLinks.map(link => {
              return (<li key={link.id}>
                <a target="_blank" className="nav-icon" href={link.href}>
                  <i className={link.icon}></i>
                </a>
              </li>)
            })
          }



        </ul>
      </div>
    </nav>
  )
}

export default Navbar