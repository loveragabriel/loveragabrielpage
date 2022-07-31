import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  
  return (
    <div id="nav-Bar">
    <div id="#icon-navBar">
    <NavLink to="/"><i className="fa-solid fa-house"></i></NavLink>
    </div>
    <div id="#icon-navBar">
      <NavLink to="/About"> <i className="fa-solid fa-user"></i></NavLink>
    </div>
    <div id="#icon-navBar">
    <NavLink to="/PersonalInfo"><i className="fa-solid fa-briefcase"></i></NavLink>
    </div>
    <div id="#icon-navBar">
    <i className="fa-solid fa-envelope"></i>
    </div> 
    </div>
  )
}
export default NavBar