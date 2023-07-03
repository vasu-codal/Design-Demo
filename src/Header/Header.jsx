import React from "react";
import Logo from "../assets/Logo.svg";
import LogoText from "../assets/LogoText.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="Header">
      <div className="top-panel">
        <div className="logo-area">
          <img src={Logo} alt="Brand Logo" id="logo" className="logo" />
          <img
            src={LogoText}
            alt="Brand Logo"
            id="logo-text"
            className="logo-text"
          />
        </div>
        <div className="search-bar">
          <input placeholder="Search by Gear, Pursuit or Pattern" />
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
      <div className="second-panel">
        <div className="s-panel-left">
          <ul className="nav-item-ul">
            <li>MENS</li>
            <li>WOMENS</li>
            <li>YOUTH</li>
            <li>YOUTH</li>
            <li>GEAR</li>
            <li>PURSUIT</li>
          </ul>
        </div>
        <div className="s-panel-right">
          <span className="text-area-left">CONTENT NAV ITEM</span>
          <div className="text-area-right">
            <span>PLAANNING A HUNT? TRY OUR</span>
            <a href="/">SYSTEM BUILDER</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
