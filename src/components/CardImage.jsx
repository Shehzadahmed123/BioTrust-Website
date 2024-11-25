import React from "react";

const CardImage = ({ starSvg }) => {
  const starCount = 5;
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-5 text-center p-2">
        <h3
          className="pt-4 p-2 "
          style={{ fontSize: "26px", fontWeight: "700", color: "#0d4f9a" }}
        >
          AGELESS MULTI-COLLAGEN® PROTEIN POWDER
        </h3>
        {/* Displaying 5 stars */}
        <p>
          {[...Array(starCount)].map((_, index) => (
            <span className="text-success" key={index}>
              {starSvg}
            </span>
          ))}
          <span className="text-primary p-2">3428 Reviews</span>
        </p>

        {/* image */}
        <div className="">
          <img
            src="https://www.biotrust.com/cdn/shop/files/DTC_Large_4_Delicious_Flavors_1296x.png?v=1726670176"
            alt="product"
            className="img-fluid w-75"
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/free-report-image-1546015359856-1555446388183.png"
            alt="rating"
            className="img-fluid"
          />
        </div>
      </div>
    </>
  );
};

export default CardImage;
