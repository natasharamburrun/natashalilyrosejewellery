import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/branding/logo-small-final-packaging.svg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const openMenu = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="search-bar">
          <h3>search</h3>
        </div>
      </div>
      <div className="navbar-center">
        {/* Title and logo */}
        <div className="brand-title-and-logo">
          <img src={logo} className="brand-logo" alt="logo" />
          <div className="Header-title-text">
            <h1>NATASHA LILY ROSE</h1>
          </div>
          <div className="Header-sub-title-text">
            <h2>Jewellery</h2>
          </div>
        </div>
        <div className="navbar-menu-section">
          <div className="navbar-burger">
            {navbarOpen ? (
              <button
                onClick={openMenu}
                className="navbar-close"
                aria-label="menu to close navbar"
                aria-expanded="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
                  <path
                    fill="#33323D"
                    fill-rule="evenodd"
                    d="M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={openMenu}
                className="navbar-hamburger"
                aria-label="menu to open navbar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13">
                  <g fill="#33323D" fill-rule="evenodd">
                    <path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z" />
                  </g>
                </svg>
              </button>
            )}
          </div>
          <div className={navbarOpen ? "nav-item active" : " nav-item"}>
            <ul className="menu">
              <li className="menu-item">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="menu-item">
                <Link to="/about">About</Link>
              </li>
              <li className="menu-item">
                <Link to="/contact-me">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <div className="shopping-cart">
          <h3>cart</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
