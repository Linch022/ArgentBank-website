import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../components/Logo'
import LogoImg from "../assets/img/argentBankLogo.png"

function Menu() {
  
  const logoData = {
    src: LogoImg,
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
      <i className="fa fa-user-circle"></i>
      {" Sign In"}
      </NavLink>
    </div>
  </nav>
  );
};

export default Menu