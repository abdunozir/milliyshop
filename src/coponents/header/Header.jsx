import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import shoLogo from "../../assets/logo.svg";
import { FaHeart } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { BsBasketFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Badge } from "@mui/material";
import "./Header.css";
import MobileNav from "../MobileNav/MobileNav";

export default function HeaderComponent() {
  let [isSiteNavOpen, setIsSiteNavOpen] = useState(false);

  let siteNavToggleFunc = () => {
    setIsSiteNavOpen(!isSiteNavOpen);
  };
  return (
    <div className="container">
      <MobileNav
        setIsSiteNavOpen={setIsSiteNavOpen}
        isSiteNavOpen={isSiteNavOpen}
      />
      <header>
        <button onClick={siteNavToggleFunc} className="header_menuIcon">
          <GiHamburgerMenu />
        </button>
        <a className="header_logo" href="/">
          <img src={shoLogo} alt="" />
        </a>

        <nav>
          <ul>
            <li>
              <a href="/">Meva & Sabzavodlar</a>
            </li>
            <li>
              <a href="/">Ichimliklar</a>
            </li>
            <li>
              <a href="/">Sovg'alar</a>
            </li>
            <li>
              <a href="/">Kamyuter & Telefonlar</a>
            </li>
          </ul>
        </nav>

        <ul className="header_events">
          <li className="header_wishlist">
            <Badge color="secondary" badgeContent={10}>
              <FaHeart />
            </Badge>
          </li>
          <li>
            <BiSearchAlt />
          </li>
          <li>
            <Badge color="secondary" badgeContent={10}>
              <BsBasketFill />
            </Badge>
          </li>
        </ul>
      </header>
    </div>
  );
}
