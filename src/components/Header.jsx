import React from "react";

const Header = () => {
  return (
    <div
      className="container-fluid text-white py-3 px-4 font"
      style={{ backgroundColor: "#0D4F9A" }}
    >
      <div className="row align-items-center">
        {/* Left Content */}

        <div className="col-5 col-sm-6 col-lg-4 d-flex">
          <div className=" d-lg-flex d-none d-lg-block ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="46"
              fill="currentColor"
              style={{ marginRight: "10px",marginTop: '-10px' }}
              className="bi bi-person-standing-dress opacity-75"
              viewBox="0 0 16 16"
            >
              <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 12.25V12h1v3.25a.75.75 0 0 0 1.5 0V12h1l-1-5v-.215a.285.285 0 0 1 .56-.078l.793 2.777a.711.711 0 1 0 1.364-.405l-1.065-3.461A3 3 0 0 0 8.784 3.5H7.216a3 3 0 0 0-2.868 2.118L3.283 9.079a.711.711 0 1 0 1.365.405l.793-2.777a.285.285 0 0 1 .56.078V7l-1 5h1v3.25a.75.75 0 0 0 1.5 0Z" />
            </svg>

            <a
              href="#"
              className="text-decoration-none text-white d-flex align-items-center "
              style={{ fontSize: "1.1rem" }}
            >
              <span className="text-color text-white ">
                EVERY ORDER CAN HELP END CHILDHOOD HUNGER
              </span>
            </a>
          </div>
          <a
            href="#"
            className="text-decoration-none text-white d-flex align-items-center d-lg-none d-sm-block "
            style={{ fontSize: "1.1rem" }}
          >
            <img
              src="//www.biotrust.com/cdn/shop/t/41/assets/chat-bubbles.png?v=95742358852790106191726098757"
              alt="Customer Support"
              className="me-2"
              style={{ width: "20px" }}
            />
            <span className="text-size "> CUSTOMER SUPPORT </span>
          </a>
        </div>

        {/* Right Content */}
        <div className="col-7 col-sm-6 col-lg-8 d-flex justify-content-end align-items-center gap-3">
          <a
            href="#"
            className="text-decoration-none text-white d-flex align-items-center d-none d-lg-block opacity"
            style={{ fontSize: "1.1rem" }}
          >
            <img
              src="//www.biotrust.com/cdn/shop/t/41/assets/chat-bubbles.png?v=95742358852790106191726098757"
              alt="Customer Support"
              className="me-2"
              style={{ width: "20px" }}
            />
            <span className="text-size font "> CUSTOMER SUPPORT </span>
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
          <a
            href="#"
            className="text-decoration-none text-white d-flex align-items-center opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="26"
              fill="currentColor"
              className="bi bi-person-fill opacity-75"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            <span className="text-size">
              MY ACCOUNT
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
            </span>
          </a>
          <a
            href="#"
            className="text-decoration-none text-white d-flex align-items-center opacity"
          >
            <img
              src="//www.biotrust.com/cdn/shop/t/41/assets/cart_30x30.png?v=6647768"
              alt="Cart Icon"
              className="me-1"
              style={{ width: "20px" }}
            />
            <span className="text-size text-hide"> MY CART </span>(0)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
