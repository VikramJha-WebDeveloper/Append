import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavSection = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Navbar = () => {
  return (
    <NavSection>
      <nav className="navbar navbar-expand-lg bg-light w-100 navbar-light">
        <div className="container-fluid">
          <a href="#" className="navbar-brand fw-bolder fs-4">
            Append
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-3">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/services" className="nav-link">
                  Services
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/portfolio" className="nav-link">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item" mx-3>
                <NavLink to="/pricing" className="nav-link">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/team" className="nav-link">
                  Team
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/blog" className="nav-link">
                  Blog
                </NavLink>
              </li>

              <li className="nav-item mx-3 dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#" className="dropdown-item">
                      Dropdown 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Dropdown 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Dropdown 3
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Dropdown 4
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Dropdown 5
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
            <button className="btn btn-danger">Get Started</button>
          </div>
        </div>
      </nav>
    </NavSection>
  );
};
export default Navbar;
