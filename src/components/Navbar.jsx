import React, { useState } from "react";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  // Function to toggle button state
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-md-5">
          {/* Logo */}
          <a className="navbar-brand opacity" href="#">
            <img
              src="https://www.biotrust.com/cdn/shop/files/naturally-honest_911b83fb-85cd-42d6-8bc9-aab9bb97abb8_300x102.png?v=1674668138"
              alt="Logo"
              className="img-fluid "
            />
          </a>

          {/* Custom Toggle Button */}
         <div className="d-flex">
         
          <div className="p-2 d-lg-none d-md-block text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
            <button
            className={`navbar-toggler d-lg-none d-flex justify-content-end align-items-center `}
            type="button"
            onClick={handleToggle}
            style={{
              border: "none",
              outline: "none",
              boxShadow: "none",
              width: "50%",
            }}
          >
           

            <div>
              {isToggled ? (
                <span>&#x2715;</span> // Close Menu Text/Icon
              ) : (
                <span>&#9776;</span> // Open Menu Text/Icon
              )}
              
            </div>
          </button>
         </div>
          {/* Navbar Links */}
          <div
            className={`collapse navbar-collapse ${isToggled ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav gap-4 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-semibold  rounded-3 nav-item-bg-color ">
                  <span className="menu-item-padding">SHOP</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-down-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-color fw-semibold"
                  href="about.html"
                >
                  QUALITY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-color fw-semibold" href="#">
                  MISSION
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-color fw-semibold" href="#">
                  REFER A FRIEND
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-color fw-semibold" href="#">
                #BIOTRUST
                </a>
              </li>
            </ul>
          </div>

          {/* Search Form */}
          <form className="d-none d-lg-block position-relative" role="search">
            <input
              className="form-control me-2 px-4 outline-none border border-1 border-black focus-none"
              type="search"
              placeholder="Search all products"
              aria-label="Search"
            />
            <span
              className="position-absolute"
              style={{ right: "10px", top: "6px", cursor: "pointer" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>
          </form>
        </div>
      </nav>
      <div className="borderbottom"></div>
    </>
  );
};

export default Navbar;
