import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const [styleProps, setStyleProps] = useState({
    title: "",
    titleFont: "bold",
    home: "",
    about: "",
  });

  function handleTitleButton() {
    setStyleProps({
      title: "active",
      titleFont: "bold",
      home: "",
      homeFont: "",
      about: "",
      aboutFont: "",
    });
  }

  function handleHomeButton() {
    setStyleProps({
      title: "",
      titleFont: "",
      home: "active",
      homeFont: "bold",
      about: "",
      aboutFont: "",
    });
  }
  function handleAboutButton() {
    setStyleProps({
      title: "",
      titleFont: "",
      home: "",
      homeFont: "",
      about: "active",
      aboutFont: "bold",
    });
  }

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className={`container-fluid text-${props.textCol}`}>
          <Link
            className={`navbar-brand ${styleProps.title} fw-${styleProps.titleFont}`}
            to="/"
            onClick={handleTitleButton}
          >
            {props.title}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${styleProps.home} fw-${styleProps.homeFont}`}
                  aria-current="page"
                  to="/"
                  onClick={handleHomeButton}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${styleProps.about} fw-${styleProps.aboutFont}`}
                  to="/about"
                  onClick={handleAboutButton}
                >
                  About
                </Link>
              </li>
            </ul>

            {/* Switch for modes */}
            <div className="form-check form-switch mx-3 ms-0">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="mySwitch"
                onClick={props.handleToggleMode}
              />
              <label className="form-check-label" htmlFor="mySwitch">
                {props.mode}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Default Title",
  aboutText: "Default About",
};
