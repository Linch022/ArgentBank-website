import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../components/Logo'

function Menu() {
  const logoData = {
    src: Logo,
    className: "main-nav-logo-image",
    alt: "Argent Bank Logo",
  }
  return (
    <nav className="main-nav">
    <NavLink to="/" className="main-nav-logo">
        <Logo logoData={logoData}/>
        <h1 className="sr-only">Argent Bank</h1>
    </NavLink>
    <div>
      <NavLink to="/sign-in" className="main-nav-item">
      <i class="fa fa-user-circle"></i>
      {" Sign In"}
      </NavLink>
    </div>
  </nav>
  )
}

export default Menu