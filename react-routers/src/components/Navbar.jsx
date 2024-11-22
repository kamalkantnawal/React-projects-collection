import React from "react";
import { NavbarContainer } from "./Style";
import { Link } from "react-router-dom";
import Home from "./Home";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="nav-items">
        <div className="item">
          <Link className="link" to="/">
            Home
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/about">
            About
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/career">
            Our Culture
          </Link>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
