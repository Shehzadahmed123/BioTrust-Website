import React from "react";
import PriceCard from "./PriceCard";
import CardImage from "./CardImage";



const CardDetails = () => {
   const cards = [
    {
      title: "1 Pack",
      description: "Every 4 Weeks (~1 month)",
      totalPrice: "$49.00",
      discountPrice: "$29.40",
      discountText: "(Save $19.60)",
      shippingText: "+ Free Shipping",
      buttonText: "CHOSE FLAVOR",
      img: "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png",
    },
    {
      title: "3 Packs",
      description: "Every 12 Weeks (~3 months)",
      totalPrice: "$49.00",
      discountPrice: "$26.95",
      discountText: "(Save $66.15) ",
      shippingText: "+ Free Shipping",
      img: "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png",
      buttonText: "CHOSE FLAVOR",
    },
    {
      title: "6 Packs",
      description: "Every 24 Weeks (~6 months)",
      totalPrice: "$49.00",
      discountPrice: "$24.50",
      discountText: "(Save $19.60) ",
      shippingText: "+ Free Shipping",
      img: "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png",
      buttonText: "CHOSE FLAVOR",
    },
  ];
  const starSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );

  return (
    <>
      <div className="" >
      <p className="px-4 pt-4 fs-5 text-primary d-none d-lg-block">Home › Collagen Protein</p>
        <div className="col-lg-12 main-cards ">
        
    <div className="col-lg-2 py-5 p-5 d-none d-lg-block ">
    <img src=" https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png"/>
    <img src=" https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png"/>
    <img src=" https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png"/>
    <img src=" https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png"/>
    <img src=" https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png"/>
    <img src=" https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png"/>
    <img src=" https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png"/>
    </div>
   
          <CardImage starSvg = {starSvg}/>
          <PriceCard cards ={cards} />
         
        </div>
      </div>
      <div className="borderbottom"></div>
    </>
  );
};

export default CardDetails;
