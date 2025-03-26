import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../components/logo/Logo'
import LogoImg from "../../assets/img/argentBankLogo.png"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slices/userDataSlice'

function Menu() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  
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
      { user ? 
      <>
        <NavLink to="/user" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {` ${user?.userName} `}
        </NavLink>
        <NavLink to="/" className="main-nav-item" onClick={() => dispatch((logout()))}>
        <i className="fa fa-sign-out"></i>
          {" Sign Out"}
        </NavLink>
      </>
      :         
      <NavLink to="/sign-in" className="main-nav-item" >
      <i className="fa fa-user-circle"></i>
      {" Sign In"}
      </NavLink>
      }
    </div>
  </nav>
  );
};

export default Menu