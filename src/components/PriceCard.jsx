import React from "react";
import Swiper from "./Swiper";

const PriceCard = ({cards}) => {
 
  return (
    <>
      <div className="col-lg-6 col-md-6  col-sm-12 col-12 py-5">
        <div
          className="text-center fw-bold"
          style={{ fontSize: "26px", color: "#0d4f9a" }}
        >
          Choose Your Package
        </div>
        <p className="text-center" style={{ fontSize: "16px" }}>
          Select your money-saving option below:
        </p>
        <div className="d-flex mx-2 ">
          <p className="buttons pt-3 ">One-Time Purchase</p>
          <p className="buttons-2 text-white" style={{ position: "relative" }}>
            Subscribe & Save Up to 50%
            <span
              className=""
              style={{
                position: "absolute",
                right: "-9px",

                top: "-14px",
                fontSize: "9px",
                backgroundColor: "#2bb34d",
                borderRadius: "50%",
                padding: "2px 6px",
                color: "#fff",
              }}
            >
              ?
            </span>
          </p>
        </div>
        {/* large screen PriceCard  */}
        <div
          style={{ width: "100%" }}
          className="main d-flex d-none d-lg-block"
        >
          <div className=" p-3 flex-large col-sm-12 col-12 ">
            {cards.map((card, index) => (
              <div className="p-2  card-border py-3  ">
                <div className="image " style={{ width: "30%" }}>
                  <img className="imagecard" src={card.img} />
                </div>
                <div className="">
                  <div className=" card-title">{card.title}</div>
                  <div className="card-description">{card.description}</div>

                  <div className="card-totalPrice">{card.totalPrice}</div>
                  <div className="card-discountPrice">
                    {" "}
                    {card.discountPrice}Per Pack
                  </div>

                  <div className="card-discounttext">{card.discountText}</div>
                  <div className="card-discountshipping">
                    {card.shippingText}
                  </div>
                  <div className=" ">
                    <button
                      className="btn text-white  fw-bold "
                      style={{
                        padding: "12px 20px",
                        borderRadius: "5px",
                        backgroundColor: "#2bb34d",
                        margin: "9px",
                      }}
                    >
                      {card.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Swiper />
        </div>

        {/* tablet and mobile view */}

        <div className=" d-lg-none d-md-block mx-2">
          <div className="col-md-12 col-sm-12">
            <div className="">
              {cards.map((card, index) => (
                <div className="card-border d-flex">
                  <div style={{ width: "25%", marginTop: "25px" }}>
                    <img style={{ width: "100%" }} src={card.img} />{" "}
                  </div>
                  <div className="d-flex flex-column">
                    <div className="card-title">{card.title}</div>
                    <div className="card-desciption">{card.description}</div>
                    <div className="card-totalPrice">{card.totalPrice}</div>
                    <div className="card-discountPrice">
                      {card.discountPrice}Per Pack
                    </div>
                    <div className="card-discounttext">{card.discountText}</div>
                    <div className="card-discountshipping">
                      {card.shippingText}
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn text-white  fw-bold "
                      style={{
                        padding: "12px 20px",
                        borderRadius: "5px",
                        backgroundColor: "#2bb34d",
                        margin: "9px",
                      }}
                    >
                      {card.buttonText}{" "}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Swiper />
        </div>
      </div>
    </>
  );
};

export default PriceCard;
