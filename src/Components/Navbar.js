import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//Navbar
function Navbar() {
  const [activeNavbar, SetActiveNavbar] = useState(false);

  return (
    <div className="navcontainer greenc borderXwidth">
      <img src="/kicksup/images/websitelogo.png" alt="" />
      <div className={`navdiv +${activeNavbar ? "" : " display-inactive"}`}>
        <NavLink to="/kicksup" activeclassname="active">
          HOME
        </NavLink>
        <NavLink to="/journey" activeclassname="active">
          THE JOURNEY
        </NavLink>
        <NavLink to="/team" activeclassname="active">
          TEAM
        </NavLink>
        <NavLink to="/store" activeclassname="active">
          STORE
        </NavLink>
        <NavLink to="/contact" activeclassname="active">
          CONTACT
        </NavLink>
      </div>
      <i className="fa-regular fa-user user"> GAGAN</i>
      <i
        onClick={() => {
          SetActiveNavbar((prev) => {
            return !prev;
          });
        }}
        className="fa-solid fa-circle toggler"
      ></i>
      <br />
      <br />
    </div>
  );
}

export default Navbar;
