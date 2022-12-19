import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="container">
      <footer>
        <p>© Copyright 2022, simple devs</p>
        <ul>
          <li>
            <a href="https://t.me/ibyvtnq">
              <FaTelegramPlane />
            </a>
          </li>
          <li>
            <a href="mailto:ibyvtnq@gmail.com">
              <AiOutlineMail />
            </a>
          </li>
          <li>
            <BsWhatsapp />
          </li>
        </ul>
      </footer>
    </div>
  );
}
