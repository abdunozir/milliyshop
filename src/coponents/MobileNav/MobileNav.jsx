import React from "react";
import { BiX } from "react-icons/bi";
import "./MobileNav.css";

export default function MobileNav({ isSiteNavOpen, setIsSiteNavOpen }) {
  return (
    <div
      className={
        isSiteNavOpen == true ? "MobileNav_open MobileNav" : "MobileNav"
      }
    >
      <div className="MobileNav_context">
        <div className="MobileNav_exit_wrapper">
          <button
            onClick={() => setIsSiteNavOpen(false)}
            className="MobileNav_exitbtn"
          >
            <BiX />
          </button>
        </div>
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
      </div>
      <div
        onClick={() => setIsSiteNavOpen(false)}
        className={
          isSiteNavOpen == true
            ? "MobilNav_shadowOpening MobilNav_shadow"
            : "MobilNav_shadow"
        }
      ></div>
    </div>
  );
}
