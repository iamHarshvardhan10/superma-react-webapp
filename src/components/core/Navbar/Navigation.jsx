import React from "react";
import "./navbar.scss";
import logo from "../../../assets/asset 0.svg";
import { Button } from "../../../components/ui/button";
const Navigation = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Blogs</li>
        <li>Changelog</li>
        <li>Waitlist</li>
      </ul>
      <div className="btn">
        <Button>Contact Us</Button>
      </div>
    </nav>
  );
};

export default Navigation;
